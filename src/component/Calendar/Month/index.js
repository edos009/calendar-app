import React from "react";
import PropTypes from "prop-types";
import FieldMonth from "../FieldMonth";
import SetMonth, { setDefaultMonthProps, setMonthProps } from "../SetMonth";
import SetYear, { setYearProps, setDefaultYearProps } from "../SetYear";
import cx from "classnames";
import { CONSTANTS } from "../../../constants";
import style from "./Month.module.scss";

const DaysWeek = () => {
  const arrTitleDaysWeek = CONSTANTS.TITLE_DAY_WEEK.map((day, i) => (
    <td className={cx(style.calendar__table__td, style.calendar__day__week)} key={i}>
      {day}
    </td>
  ));

  return (
    <thead className={style.calendar__table__head}>
      <tr className={style.calendar__table__tr}>{arrTitleDaysWeek}</tr>
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
  setMonthBtn,
}) => {
  return (
    <div className={style.month}>
      <SetMonth
        date={date}
        allMonths={allMonths}
        isShowSelectMonths={isShowSelectMonths}
        setMonthForCalendar={setMonthForCalendar}
        showMonths={showMonths}
        showFieldMonth={showFieldMonth}
        setMonthBtn={setMonthBtn}
      />
      <SetYear date={date} currentYear={currentYear} changeYear={changeYear} />
      {isShowFieldMonth && (
        <table className={style.calendar__table}>
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
