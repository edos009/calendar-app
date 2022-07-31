import { format, setYear } from "date-fns";
import React from "react";
import { currentDate } from "../../../utils/date";
import style from "./SetYear.module.css";
import { PropTypes } from 'prop-types';

const SetYear = ({ date, currentYear, changeYear }) => {
  const getListYears = () => {
    const years = [];
    for (let i = 1970; i <= Number(format(currentDate, "yyyy")) + 20; i++) {
      years.push(i);
    }

    return years;
  };

  const getMinYearOfList = () => Math.min(...getListYears());

  const getMaxYearOfList = () => Math.max(...getListYears());

  const handlerChangeYear = ({ target: { value } }) => {
    let newDate = "";
    if (
      value.length > 3 &&
      (Number(value) < getMinYearOfList() || Number(value) > getMaxYearOfList())
    ) {
      value = format(currentDate, "yyyy");
      newDate = setYear(date, value);
      changeYear(newDate, value);
    } else {
      newDate = setYear(date, value);
      changeYear(newDate, value);
    }
  };

  return (
    <div>
      <input
        className={style.calendar_year}
        type="number"
        min={getMinYearOfList()}
        max={getMaxYearOfList()}
        name="currentYear"
        value={currentYear}
        onChange={handlerChangeYear}
      />
    </div>
  );
};

SetYear.defaultProps = {
  date: new Date(),
  currentYear: new Date().getFullYear(),
  changeYear: () => {},
};

SetYear.propTypes = {
  date: PropTypes.object.isRequired,
  currentYear: PropTypes.number.isRequired,
  changeYear: PropTypes.func.isRequired,
};

export default SetYear;
