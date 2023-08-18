import React from "react";
import { FaStar, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Card(props) {
  let badgeText;
  if (props.items.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.items.location == "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="relative">
        {/*Using conditional rendering*/}
        {badgeText && (
          <div className="absolute top-4 text-center rounded-[7px] text-[14px] left-3 bg-white w-[80px] py-[3px] text-bold">
            {badgeText}
          </div>
        )}
        <div className="w-[200px] h-[250px] mb-32">
          <img
            className="w-100% h-[100%] rounded-[20px]"
            src={props.items.coverImg}
            alt=""
          />

          <div className="flex items-center mt-[10px]">
            <FaStar className="text-red-500 mr-1" />
            <p className="font-bold text-[12px]">
              {props.items.stats.rating}
              <span className="text-gray-500 text-[12px]">
                ({props.items.stats.reviewCount}) &middot;{" "}
                {props.items.location}
              </span>
            </p>
          </div>

          <p className="text-[12px] text-gray-900 pt-2 pb-2 overflow-hidden text-ellipsis">
            {props.items.title}
          </p>

          <p className="text-[12px] font-bold">
            From ${props.items.price}/{" "}
            <span className="font-normal">Person</span>
          </p>
        </div>
      </div>
    </>
  );
}
