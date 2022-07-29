import React from "react";
import PropTypes from "prop-types";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import { nanoid } from "nanoid";

const DaysWeek = () => {
  const titleDaysWeek = ["S", "M", "T", "W", "T", "F", "S"];
  return titleDaysWeek.map((day, i) => <td key={i}>{day}</td>);
};

const id = () => {
  return nanoid();
};

const Month = ({ date }) => {
  const firstDayOfMonth = () => {
    return format(startOfMonth(date), "i") - 1;
  };

  const getFullCountDaysOfMonth = () => {
    const daysOfMonth = [];
    for (let i = 1; i <= getDaysInMonth(date); i++) {
      daysOfMonth.push(
        <td key={id()} className="calendar-day">
          {i}
        </td>
      );
    }
    return daysOfMonth;
  };

  const getEmptyCellsOfMonth = () => {
    const blank = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blank.push(<td key={id()}>{""}</td>);
    }
    return blank;
  };

  const totalSlots = [...getEmptyCellsOfMonth(), ...getFullCountDaysOfMonth()];

  const getCellsCalendar = () => {
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i === 0) {
        cells.push(row);
      } else {
        if (i % 7 !== 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          rows.push(cells);
        }
      }
    });

    return rows;
  };

  const getFieldCalendar = () => {
    return getCellsCalendar().map((d) => {
      return <tr key={id()}>{d}</tr>;
    });
  };

  return (
    <section>
      <table>
        <thead>
          <tr key={id()}>
            <DaysWeek />
          </tr>
        </thead>
        <tbody>{getFieldCalendar()}</tbody>
      </table>
    </section>
  );
};

Month.defaultProps = {
  date: new Date(),
};

Month.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Month;
