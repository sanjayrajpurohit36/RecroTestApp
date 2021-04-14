import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultData } from "Actions/testAction";
import Card from "./Components/Card";
import "./index.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.defaultInfo.data);
  const [start, setStart] = useState(0);

  useEffect(() => {
    getDefaultData(start, dispatch);
  }, []);

  window.onscroll = function () {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      getDefaultData(start + 10, dispatch);
      setStart(start + 10);
      console.log("calling api");
    }
  };
  return (
    <div className="main-container">
      <div className="users-wrapper">
        {usersData &&
          usersData.length !== 0 &&
          usersData.map((data) => {
            return (
              <div className="user-profile-container" id={data?.id}>
                <Card userId={data?.id} title={data?.title} body={data?.body} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
