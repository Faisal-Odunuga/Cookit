import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Rating from "../../components/rating/Rating";
import Tag from "../tag/Tag";
import Intro from "../../components/intro/Intro";
import Details from "../../components/details/Details";
import { AllContext } from "../../hooks/GlobalContext";

const DishDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );
  const { setQuery, setMealType } = useContext(AllContext);
  data;
  useEffect(() => {
    document.title = data?.name;
    setQuery("");
    setMealType("");
  }, [setMealType, setQuery, data]);
  return (
    <section className="min-h-screen text-[#202223]">
      <div className="w-4/5 lg:w-3/4 mx-auto pt-10">
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

export default DishDetails;
