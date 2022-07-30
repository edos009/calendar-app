import React, { Component } from "react";
import Day from "./Day";
import Month from "./Month";
import style from "./Calendar.module.css";

const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      allMonths: allMonths,
    };
  }

  setMonthForCalendar = (newDate) => {
    this.setState({ date: newDate });
  };

  render() {
    const { date, allMonths } = this.state;
    return (
      <section className={style.calendar_app}>
        <Day />
        <Month
          date={date}
          allMonths={allMonths}
          setMonthForCalendar={this.setMonthForCalendar}
        />
      </section>
    );
  }
}

export default Calendar;
