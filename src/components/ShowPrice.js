import React, { useState, useEffect } from "react";
import PriceContext from "./PriceGenerator";
import { useContext } from "react";

export default function ShowPrice() {
  const [price] = useContext(PriceContext);
  const [open, setOpen] = useState(false);

  function addToDataLayer() {
    if (window.gtag) {
      window.gtag("event", "price_click", {
        price,
      });
    }
  }
  localStorage.setItem("viewedPrice", "false");
  /* eslint-disable */
  useEffect(() => {
    if (open) {
      addToDataLayer();
      localStorage.setItem("viewedPrice", "true");
    }
  }, [open]);

  return (
    <div id="price" className="" onClick={() => setOpen(true)}>
      {open ? (
        <div className="">
          <div className="animate-[moveout_.2s_ease-out_forwards]">
            <h2 className="min-w-max text-center absolute text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl lg:text-left">
              <span className=" text-sage">+ See Pricing</span>
            </h2>
          </div>
          <div
            className="animate-[movein_.2s_ease-in_forwards] "
            id="price_visible"
          >
            <h2 className="min-w-max text-center absolute text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl lg:text-left  ">
              Subscription only{" "}
              <span className=" text-sage">{price} month</span>
            </h2>
          </div>
        </div>
      ) : (
        <div id="seemore">
          <h2 className="min-w-max cursor-pointer absolute text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl hover:text-sage">
            <span className=" text-sage">+ </span> See Pricing
          </h2>
        </div>
      )}
    </div>
  );
}
