import React, { useState } from "react";
import "./Result.css";

function Result(prompt) {
  const dummyData = [
    {
      name: "Sansotei Ramen",
      address: "1537 Merivale Rd, Ottawa, ON K2G 3J3, Canada",
      website: "http://www.sansotei.com/",
      review:
        "Sansotei Ramen offers an authentic and satisfying ramen experience with rich broths, perfectly cooked noodles, and delicious toppings.",
      rating: 9,
    },
    {
      name: "Hokkaido Ramen Santouka",
      address: "50 Rideau St, Ottawa, ON K1N 9J7, Canada",
      website: "https://www.santouka.co.jp/en/",
      review:
        "Hokkaido Ramen Santouka serves outstanding tonkotsu ramen with creamy broth, impeccable noodles, and a taste of Hokkaido in every bite.",
      rating: 8.5,
    },
    {
      name: "Ken's Sushi House",
      address: "256 Bank St, Ottawa, ON K2P 1X4, Canada",
      website: null,
      review:
        "Ken's Sushi House surprises with a delightful bowl of ramen alongside its sushi selection, featuring flavorful broth and customizable toppings.",
      rating: 8,
    },
  ];

  return (
    <div className="results-container border border-red-600">
      {dummyData.map((i) => {
        return (
          <div className="column border border-slate-500 bg-slate-400 p-6 w-full text-black">
            <h1>{i.name}</h1>
            <h2>{i.address}</h2>
            <h3>{i.website}</h3>
            <h4>{i.review}</h4>
            <h5>{i.rating}</h5>
          </div>
        );
      })}
    </div>
  );
}
export default Result;
