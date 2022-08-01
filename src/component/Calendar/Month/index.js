import React from "react";
import PropTypes from "prop-types";
import FieldMonth from "../FieldMonth";
import SetMonth, { setDefaultMonthProps, setMonthProps } from "../SetMonth";
import SetYear, { setYearProps, setDefaultYearProps } from "../SetYear";
import cx from "classnames";
import { CONSTANTS } from "../../../constants";
import style from "./Month.module.css";

const DaysWeek = () => {
  const arrTitleDaysWeek = CONSTANTS.TITLE_DAY_WEEK.map((day, i) => (
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
      <SetYear date={date} currentYear={currentYear} changeYear={changeYear} />
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
  ...setDefaultMonthProps,
  ...setDefaultYearProps,
  isShowFieldMonth: true,
};

Month.propTypes = {
  ...setMonthProps,
  ...setYearProps,
  isShowFieldMonth: PropTypes.bool.isRequired,
};

export default Month;
