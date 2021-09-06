import React from "react";
import Row from "./Row";
import requests from "../../requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Play() {
  return (
    <div style={{ backgroundColor: "#111" }}>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentries} />
      <Footer />
    </div>
  );
}
