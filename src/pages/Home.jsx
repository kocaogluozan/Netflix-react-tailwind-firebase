import React from "react";
import Main from "../components/Main";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row title="Horror" fetchUrl={requests.requestHorror} />
      <Row title="Popular" fetchUrl={requests.requestPopular} />
      <Row title="Toprated" fetchUrl={requests.requestTopRated} />
      <Row title="Trending" fetchUrl={requests.requestTrending} />
    </div>
  );
};

export default Home;
