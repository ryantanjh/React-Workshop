import NavBar from "../components/NavBar";
import Aboutme from "../components/Aboutme";
import { useState } from "react";

const Homepage = () => {
  const [year, setYear] = useState(3);
  const handleClick = () => {
    setYear(year + 1);
  };
  return (
    <>
      <NavBar />
      <h1>Homepage</h1>
      <p>Hi my name is ryan</p>
      <Aboutme year={year} />
      <button onClick={handleClick}>Increment year</button>
    </>
  );
};

export default Homepage;
