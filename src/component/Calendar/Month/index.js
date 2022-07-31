import React from "react";
import PropTypes from "prop-types";
import FieldMonth from "../FieldMonth";
import SetMonth from "../SetMonth";
import SetYear from "../SetYear/index";
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
  currentYear,
  isShowSelectMonths,
  isShowFieldMonth,
  setMonthForCalendar,
  showMonths,
  showFieldMonth,
  changeYear,
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
      <SetYear date={date} currentYear={currentYear} changeYear={changeYear}/>
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
  currentYear: new Date().getFullYear(),
  isShowSelectMonths: false,
  isShowFieldMonth: true,
  setMonthForCalendar: () => {},
  showMonths: () => {},
  showFieldMonth: () => {},
  changeYear: () => {},
};

Month.propTypes = {
  date: PropTypes.object.isRequired,
  allMonths: PropTypes.array.isRequired,
  currentYear: PropTypes.number.isRequired,
  isShowSelectMonths: PropTypes.bool.isRequired,
  isShowFieldMonth: PropTypes.bool.isRequired,
  setMonthForCalendar: PropTypes.func.isRequired,
  showMonths: PropTypes.func.isRequired,
  showFieldMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
};

export default Month;
