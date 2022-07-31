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
      isShowSelectMonths: false,
      isShowFieldMonth: true,
    };
  }

  setMonthForCalendar = (newDate) => {
    this.setState({ date: newDate });
  };

  showMonths = () => {
    const {isShowSelectMonths} = this.state;
    this.setState({ isShowSelectMonths: !isShowSelectMonths });
  }

  showFieldMonth = () => {
    const { isShowFieldMonth } = this.state;
    this.setState({ isShowFieldMonth: !isShowFieldMonth });
  }

  render() {
    const { date, allMonths, isShowSelectMonths, isShowFieldMonth } =
      this.state;
    return (
      <section className={style.calendar_app}>
        <Day />
        <Month
          date={date}
          allMonths={allMonths}
          isShowSelectMonths={isShowSelectMonths}
          isShowFieldMonth={isShowFieldMonth}
          setMonthForCalendar={this.setMonthForCalendar}
          showMonths={this.showMonths}
          showFieldMonth={this.showFieldMonth}
        />
      </section>
    );
  }
}

export default Calendar;
