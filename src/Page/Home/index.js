import { useEffect } from "react";
import Card from "./Components/Card";
import "./index.scss";

const Home = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="main-container">
      <Card userId={1} title={"Hi"} body={"hello"} />
    </div>
  );
};

export default Home;
