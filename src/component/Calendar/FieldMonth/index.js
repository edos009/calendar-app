import React from "react";
import {
  addMonths,
  format,
  getDaysInMonth,
  lastDayOfMonth,
  startOfMonth,
  subMonths,
} from "date-fns";
import cx from "classnames";
import { currentDate } from "../../../utils/date";
import style from "./FieldMonth.module.css";
import { getUniqId } from "../../../utils/index";
import { PropTypes } from "prop-types";

const FieldMonth = ({ date }) => {
  const getPrevMonth = () => {
    return subMonths(date, 1);
  };

  const getNextMonth = () => {
    return addMonths(date, 1);
  };

  const getAllDaysNeighborMonth = (month) => {
    const daysPrevMonth = [];

    for (let i = 1; i <= Number(format(month, "d")); i++) {
      daysPrevMonth.push(i);
    }

    return daysPrevMonth;
  };

  const getFirstDayOfMonth = () => {
    return format(startOfMonth(date), "i") - 1;
  };

  const getLastDayOfMonth = () => {
    return 6 - (format(lastDayOfMonth(date), "i") - 1);
  };

  const getLastDaysPrevMonthInEmptyCells = () =>
    getFirstDayOfMonth() !== 0
      ? getAllDaysNeighborMonth(getPrevMonth()).slice(-getFirstDayOfMonth())
      : [];

  const getFirstDaysNextMonthInEmptyCells = () =>
    getLastDayOfMonth() !== 0
      ? getAllDaysNeighborMonth(getNextMonth()).slice(0, getLastDayOfMonth())
      : [];

  const getEmptyCellsOfMonth = (days) => {
    const blank = [];
    for (let i = 0; i < days.length; i++) {
      blank.push(
        <td
          className={cx(style.calendar_empty_day, style.calendar_cell)}
          key={i + "-empty"}
        >
          {days[i]}
        </td>
      );
    }
    return blank;
  };

  const getEmptyCellsPrevMonth = () =>
    getEmptyCellsOfMonth(getLastDaysPrevMonthInEmptyCells());

  const getEmptyCellsNextMonth = () =>
    getEmptyCellsOfMonth(getFirstDaysNextMonthInEmptyCells());

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

  const totalSlots = [
    ...getEmptyCellsPrevMonth(),
    ...getFullCountDaysOfMonth(),
    ...getEmptyCellsNextMonth(),
  ];

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
