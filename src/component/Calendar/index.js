import React, { Component } from "react";
import Day from "./Day";
import Month from "./Month";
import style from "./Calendar.module.css";
import { format } from "date-fns";
import { currentDate } from "../../utils/date";
import { CONSTANTS } from "../../constants";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      allMonths: CONSTANTS.ALL_MONTH,
      currentYear: Number(format(currentDate, "yyyy")),
      isShowSelectMonths: false,
      isShowFieldMonth: true,
    };
  }

  setMonthForCalendar = (newDate) => {
    this.setState({ date: newDate });
  };

  showMonths = () => {
    const { isShowSelectMonths } = this.state;
    this.setState({ isShowSelectMonths: !isShowSelectMonths });
  };

  showFieldMonth = () => {
    const { isShowFieldMonth } = this.state;
    this.setState({ isShowFieldMonth: !isShowFieldMonth });
  };

  changeYear = (newDate, value) => {
    this.setState({ date: newDate, currentYear: Number(value) });
  };

  render() {
    const {
      date,
      allMonths,
      currentYear,
      isShowSelectMonths,
      isShowFieldMonth,
    } = this.state;
    return (
      <section className={style.calendar_app}>
        <Day />
        <Month
          date={date}
          allMonths={allMonths}
          currentYear={currentYear}
          isShowSelectMonths={isShowSelectMonths}
          isShowFieldMonth={isShowFieldMonth}
          setMonthForCalendar={this.setMonthForCalendar}
          showMonths={this.showMonths}
          showFieldMonth={this.showFieldMonth}
          changeYear={this.changeYear}
        />
      </section>
    );
  }
}

export default Calendar;
