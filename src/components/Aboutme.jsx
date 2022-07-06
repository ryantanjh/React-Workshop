import React from "react";

const Aboutme = ({ year }) => {
  return (
    <div>
      <p>Im a year {year} business analytics student</p>
      {year > 4 ? <p>Yay i graduated</p> : <p>Im studying in NUS</p>}
    </div>
  );
};

export default Aboutme;
