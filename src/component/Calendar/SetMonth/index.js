import { setMonth, format } from "date-fns";
import React from "react";
import { getUniqId } from "../../../utils";
import { PropTypes } from 'prop-types';
import style from "./SetMonth.module.css";

const SetMonth = ({ date, allMonths, setMonthForCalendar }) => {
  const month = () => {
    return format(date, "LLLL");
  };

  const handlerSetMonth = (i) => {
    const newDate = setMonth(date, i);
    setMonthForCalendar(newDate);
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
          rows.push({cells, key: getUniqId()});
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
      <div className={style.calendar_current_month}>{month()}</div>
      <table>
        <thead>
          <tr>
            <td colSpan="4">Select a Month</td>
          </tr>
        </thead>
        <tbody>{getFieldMonth()}</tbody>
      </table>
    </div>
  );
};

SetMonth.defaultProps = {
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
  setMonthForCalendar: () => {},
};

SetMonth.propTypes = {
  date: PropTypes.object.isRequired,
  allMonths: PropTypes.array.isRequired,
  setMonthForCalendar: PropTypes.func.isRequired,
};

export default SetMonth;
