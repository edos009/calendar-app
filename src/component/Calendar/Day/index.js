import React from "react";
import { format } from "date-fns";
import { currentDate } from "../../../utils/date";
import style from "./Day.module.scss";

const Day = () => {
  return (
    <div className={style.current__day}>
      <div className={style.current__day__week}>
        {format(currentDate, "EEEE")}
      </div>
      <div className={style.current__day__number}>
        {format(currentDate, "d")}
      </div>
    </div>
  );
};

export default Day;
