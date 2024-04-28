"use client";

import React, { useState, useEffect } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCounty = async () => {
      const response = await fetch("https://extreme-ip-lookup.com/json/")
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCounty();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
