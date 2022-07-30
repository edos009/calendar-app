import React from "react";
import PropTypes from "prop-types";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import { nanoid } from "nanoid";
import style from "./Month.module.css";
import cx from "classnames";

const DaysWeek = () => {
  const titleDaysWeek = ["M", "T", "W", "T", "F", "S", "S"];
  return titleDaysWeek.map((day, i) => (
    <td className={cx(style.calendar_cell, style.calendar_dayWeek)} key={i}>
      {day}
    </td>
  ));
};

const id = () => {
  return nanoid();
};

const Month = ({ date }) => {
  const firstDayOfMonth = () => {
    return format(startOfMonth(date), "i") - 1;
  };

  const getFullCountDaysOfMonth = () => {
    const daysOfMonth = [];

    for (let i = 1; i <= getDaysInMonth(date); i++) {
      daysOfMonth.push(
        <td
          className={cx(
            style.calendar_day,
            style.calendar_cell,
            Number(format(date, "d")) !== i ? "" : style.calendar_current_day
          )}
          key={id()}
        >
          {i}
        </td>
      );
    }

    return daysOfMonth;
  };

  const getEmptyCellsOfMonth = () => {
    const blank = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blank.push(
        <td
          className={cx(style.calendar_empty_day, style.calendar_cell)}
          key={id()}
        >
          {""}
        </td>
      );
    }
    return blank;
  };

  const totalSlots = [...getEmptyCellsOfMonth(), ...getFullCountDaysOfMonth()];

  const getCellsCalendar = () => {
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i === 0) {
        cells.push(row);
      } else {
        if (i % 7 !== 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          rows.push(cells);
        }
      }
    });

    return rows;
  };

  const getFieldCalendar = () => {
    return getCellsCalendar().map((d) => {
      return (
        <tr className={style.calendar_row} key={id()}>
          {d}
        </tr>
      );
    });
  };

  return (
    <div>
      <table className={style.calendar}>
        <thead className={style.calendar_head}>
          <tr className={style.calendar_row} key={id()}>
            <DaysWeek />
          </tr>
        </thead>
        <tbody className={style.calendar_body}>{getFieldCalendar()}</tbody>
      </table>
    </div>
  );
};

Month.defaultProps = {
  date: new Date(),
};

Month.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Month;
