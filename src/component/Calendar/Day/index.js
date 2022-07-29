import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Day = ({ date }) => {
  return (
    <section>
      <div>{format(date, "EEEE")}</div>
      <div>{format(date, "d")}</div>
    </section>
  );
};

Day.defaultProps = {
  date: new Date(),
};

Day.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Day;
