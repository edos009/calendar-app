import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import style from "./Day.module.css";

const Day = ({ date }) => {
  return (
    <div>
      <div className={style.calendar_current_dayWeek}>
        {format(date, "EEEE")}
      </div>
      <div className={style.calendar_current_day}>{format(date, "d")}</div>
    </div>
  );
};

Day.defaultProps = {
  date: new Date(),
};

Day.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Day;
