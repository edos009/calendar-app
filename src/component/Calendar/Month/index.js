import React from "react";
import PropTypes from "prop-types";
import FieldMonth from "../FieldMonth";
import SetMonth from "../SetMonth";
import cx from "classnames";
import style from "./Month.module.css";

const titleDaysWeek = ["M", "T", "W", "T", "F", "S", "S"];

const DaysWeek = () => {
  const arrTitleDaysWeek = titleDaysWeek.map((day, i) => (
    <td className={cx(style.calendar_cell, style.calendar_dayWeek)} key={i}>
      {day}
    </td>
  ));

  return (
    <thead className={style.calendar_head}>
      <tr className={style.calendar_row}>{arrTitleDaysWeek}</tr>
    </thead>
  );
};

const Month = ({
  date,
  allMonths,
  isShowSelectMonths,
  isShowFieldMonth,
  setMonthForCalendar,
  showMonths,
  showFieldMonth,
}) => {
  return (
    <div>
      <SetMonth
        date={date}
        allMonths={allMonths}
        isShowSelectMonths={isShowSelectMonths}
        setMonthForCalendar={setMonthForCalendar}
        showMonths={showMonths}
        showFieldMonth={showFieldMonth}
      />
      {isShowFieldMonth && (
        <table className={style.calendar}>
          <DaysWeek />
          <FieldMonth date={date} />
        </table>
      )}
    </div>
  );
};

Month.defaultProps = {
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

Month.propTypes = {
  date: PropTypes.object.isRequired,
  allMonths: PropTypes.array.isRequired,
  setMonthForCalendar: PropTypes.func.isRequired,
};

export default Month;
