import React from "react";
import "./main.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./components/data";
import Hero from "./components/hero";

export default function App() {
  const cards = data.map((items) => {
    return (
      <Card
        //each child in a list shoud have a unique "key" prop
        key={items.id}
        // spread operatorscan also be used {...items}
        items={items}
        /*coverImg={items.coverImg}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        location={items.location}
        title={items.title}
        price={items.price}
    openSpots={items.openSpots} */
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex pl-8 space-x-8  items-center justify-center">
        {cards}
      </div>
    </>
  );
}
