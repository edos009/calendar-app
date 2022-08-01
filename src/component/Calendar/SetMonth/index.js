import { setMonth, format, addMonths, subMonths } from "date-fns";
import React from "react";
import { getUniqId } from "../../../utils";
import { PropTypes } from "prop-types";
import style from "./SetMonth.module.scss";
import cx from "classnames";

const SetMonth = ({
  date,
  allMonths,
  isShowSelectMonths,
  setMonthForCalendar,
  showMonths,
  showFieldMonth,
  setMonthBtn,
}) => {
  const month = () => {
    return format(date, "LLLL");
  };

  const handlerSetMonth = (i) => {
    const newDate = setMonth(date, i);
    setMonthForCalendar(newDate);
    showMonths();
    showFieldMonth();
  };

  const handlerShow = () => {
    showMonths();
    showFieldMonth();
  };

  const handlerSetMonthBtn = (method) => {
    const newDate = method(date, 1);
    setMonthBtn(newDate);
  };

  const getListTdMonth = () => {
    return allMonths.map((month, i) => {
      return (
        <td key={month} onClick={() => handlerSetMonth(i)}>
          {month}
        </td>
      );
    });
  };

  const getCallsMonth = () => {
    const rows = [];
    let cells = [];

    getListTdMonth().forEach((row, i) => {
      if (i === 0) {
        cells.push(row);
      } else {
        if (i % 3 !== 0) {
          cells.push(row);
        } else {
          rows.push({ cells, key: getUniqId() });
          cells = [];
          cells.push(row);
        }
      }
    });
    rows.push({ cells, key: getUniqId() });

    return rows;
  };

  const getFieldMonth = () => {
    return getCallsMonth().map((row) => {
      return <tr key={row.key}>{row.cells}</tr>;
    });
  };

  return (
    <div className={style.calendar_month}>
      <div>
        <button
          className={cx(style.btn, style.btn_prev)}
          onClick={() => handlerSetMonthBtn(subMonths)}
        ></button>
        <div className={style.calendar_current_month} onClick={handlerShow}>
          {month()}
        </div>
        <button
          className={cx(style.btn, style.btn_next)}
          onClick={() => handlerSetMonthBtn(addMonths)}
        ></button>
      </div>
      {isShowSelectMonths && (
        <table>
          <thead>
            <tr>
              <td colSpan="4">Select a Month</td>
            </tr>
          </thead>
          <tbody>{getFieldMonth()}</tbody>
        </table>
      )}
    </div>
  );
};

export const setDefaultMonthProps = {
  date: new Date(),
  allMonths: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  isShowSelectMonths: false,
  setMonthForCalendar: () => {},
  showMonths: () => {},
  showFieldMonth: () => {},
};
SetMonth.defaultProps = setDefaultMonthProps;

export const setMonthProps = {
  date: PropTypes.object.isRequired,
  allMonths: PropTypes.array.isRequired,
  isShowSelectMonths: PropTypes.bool.isRequired,
  setMonthForCalendar: PropTypes.func.isRequired,
  showMonths: PropTypes.func.isRequired,
  showFieldMonth: PropTypes.func.isRequired,
};
SetMonth.propTypes = setMonthProps;

export default SetMonth;
