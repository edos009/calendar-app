import React from "react";
import { format } from "date-fns";
import { currentDate } from "../../../utils/date";
import style from "./Day.module.css";

const Day = () => {
  return (
    <div>
      <div className={style.calendar_current_dayWeek}>
        {format(currentDate, "EEEE")}
      </div>
      <div className={style.calendar_current_day}>
        {format(currentDate, "d")}
      </div>
    </div>
  );
};

export default Day;
