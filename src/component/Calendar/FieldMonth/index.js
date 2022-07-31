import React from "react";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import cx from "classnames";
import { currentDate } from "../../../utils/date";
import style from "./FieldMonth.module.css";
import { getUniqId } from "../../../utils/index";
import { PropTypes } from "prop-types";

const FieldMonth = ({ date }) => {
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
            Number(format(currentDate, "d")) === i &&
              Number(format(date, "M")) === Number(format(currentDate, "M")) &&
              Number(format(date, "Y")) === Number(format(currentDate, "Y"))
              ? style.calendar_current_day
              : ""
          )}
          key={i}
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
          key={i + "-empty"}
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
          rows.push({ cells, key: getUniqId() });
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          rows.push({ cells, key: getUniqId() });
        }
      }
    });

    return rows;
  };

  const getFieldCalendar = () => {
    return getCellsCalendar().map((row) => {
      return (
        <tr className={style.calendar_row} key={row.key}>
          {row.cells}
        </tr>
      );
    });
  };

  return <tbody className={style.calendar_body}>{getFieldCalendar()}</tbody>;
};

FieldMonth.defaultProps = {
  date: new Date(),
};

FieldMonth.propTypes = {
  date: PropTypes.object.isRequired,
};

export default FieldMonth;
