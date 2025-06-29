import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Rating from "../../components/rating/Rating";
import Tag from "../tag/Tag";
import Intro from "../../components/intro/Intro";
import Details from "../../components/details/Details";

const PizzaDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );
  data;

  return (
    <section className="min-h-screen text-[#202223]">
      <div className="w-3/4 mx-auto pt-10">
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-6xl m-auto col-span-4 h-screen" />
        ) : error ? (
          <div>{error}</div>
        ) : (
          ""
        )}
        <div className="space-y-10">
          <Intro data={data} />
          <Details data={data} />
        </div>
      </div>
    </section>
  );
};

export default PizzaDetails;
