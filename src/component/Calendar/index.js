import React, { Component } from 'react';
import Day from './Day';
import Month from './Month';
import style from './Calendar.module.css'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  
  render() {
    const {date} = this.state;
    return (
      <section className={style.calendar_app}>
        <Day date={date} />
        <Month date={date} />
      </section>
    );
  }
}

export default Calendar;
