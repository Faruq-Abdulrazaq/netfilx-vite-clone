import React from "react";
import Main from "../components/Main";
import requests from "../Requests";
import Row from "@/components/Row";

function Home() {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Tending" fetchURL={requests.requestTrending} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
}

export default Home;
