import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDefaultData } from "Actions/testAction";
import Card from "./Components/Card";
import "./index.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getDefaultData(10, dispatch);
  }, []);
  return (
    <div className="main-container">
      <Card userId={1} title={"Hi"} body={"hello"} />
    </div>
  );
};

export default Home;
