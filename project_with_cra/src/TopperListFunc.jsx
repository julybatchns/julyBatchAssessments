import React, { useState } from "react";
import "./TopperListFunc.css";

const TopperListFunc = () => {
  const list = [
    {
      name: "naman",
      percent: 60.0,
    },
    {
      name: "ritesh",
      percent: 99.9431,
    },
    {
      name: "hitesh",
      percent: 65.3365,
    },
    {
      name: "shreya",
      percent: 80.64,
    },
    {
      name: "ankur",
      percent: 78.897,
    },
    {
      name: "vanshu",
      percent: 78.9876,
    },
    {
      name: "krupal",
      percent: 85.3214,
    },
  ];

  return (
    <div id="main">
      {list.map(function (item, index) {
        if (item.percent > 75.0) {
          return (
            <>
              <div key={index} className={item.percent >= 90 ? "bg-pink" : ""}>
                <div className="name">{item.name}</div>
                <div className="percent">{item.percent.toFixed(2)}</div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default TopperListFunc;
