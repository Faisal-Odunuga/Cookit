import React, { useContext, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Intro from "../../components/intro/Intro";
import Details from "../../components/details/Details";
import { AllContext } from "../../hooks/GlobalContext";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";
import Rating from "../../components/rating/Rating";
import PDF from "../../components/pdf/PDF";

const DishDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );
  const { setQuery, setMealType } = useContext(AllContext);
  const recipeRef = useRef();

  const handleDownloadPDF = () => {
    const element = recipeRef.current;
    const options = {
      margin: 0.5,
      filename: `${data.title}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // html2pdf().set(options).from(element).save();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = data.image;
    // img.onload = () => {
    //   html2pdf()
    //     .set(options)
    //     .from(element)
    //     .outputPdf("bloburl")
    //     .then((pdfUrl) => {
    //       window.open(pdfUrl, "_blank");
    //     });
    // };
    img.onload = () => {
      html2pdf().set(options).from(element).save();
    };
  };

  useEffect(() => {
    document.title = data?.name || "Cookit";
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
          <Intro data={data} handleDownloadPDF={handleDownloadPDF} />
          <Details data={data} />
        </div>

        <section className="print-only">
          <div ref={recipeRef}>
            <PDF data={data} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default DishDetails;
