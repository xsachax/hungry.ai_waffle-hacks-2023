import { useState } from "react";
import "./Result.css";
import pin from "../../assets/pin.png";
import star from "../../assets/star.png";
import "../Hero/Hero.tsx";

const Result = (data) => {
  data = Object.values(data)[0];
  const arr = JSON.parse(data);

  console.log(arr);
  //console.log(myObject["choices"][0]["text"]);

  //console.log(data);
  //console.log(typeof data);
  //const colors = ["#f7a1a9", "#9ea9f7", "#fad791", "#b697fc", "#f7c183"];
  /*const dummyData = [
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
  ];*/

  return (
    <div className="flex gap-2 p-4 justify-center items-start flex-wrap">
      {arr == null ? (
        <div></div>
      ) : (
        arr.map((restaurant) => {
          return (
            <li key={restaurant.name} className="list-none">
              <div
                className={
                  "w-80 border-8 rounded-xl text-left border-slate-300 text-black bg-slate-200 flex-wrap"
                }
              >
                {restaurant.rating ? (
                  <div className="flex gap-1 items-center justify-end p-2">
                    <p className="text-lg">{restaurant.rating}/10</p>

                    <img
                      className="aspect-square"
                      src={star}
                      alt="star"
                      width={22}
                    />
                  </div>
                ) : null}
                <div className="gap-4 px-6 pb-6 pt-2 grid grid-cols-1 ">
                  <p className="text-xl font-bold mb-3">{restaurant.name}</p>
                  {restaurant.address ? (
                    <div className="flex gap-2">
                      <div className=" w-16">
                        <img
                          className="aspect-square my-1"
                          src={pin}
                          alt="pin"
                          width={30}
                          height={30}
                        />
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/${restaurant.name
                          .split(" ")
                          .join("+")}`}
                        target="_blank"
                        className="text-md text-blue-900 leading-4"
                      >
                        {restaurant.address}
                      </a>
                    </div>
                  ) : null}
                  {restaurant.website ? (
                    <a
                      href={restaurant.website}
                      target="_blank"
                      className="text-sm italic underline hidden md:block"
                    >
                      {restaurant.website}
                    </a>
                  ) : null}
                  {restaurant.review ? (
                    <div className="border-2 border-slate-400 rounded-xl bg-slate-300 p-4">
                      <p className="text-sm">{restaurant.review}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })
      )}
    </div>
  );
};
export default Result;
