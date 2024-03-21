import React, { useState } from "react";

function PlanInfoCard({ planFeatures }) {
  const [selectedPeriod, setSelectedPeriod] = useState("Quarterly");

  const handleClick = (period) => {
    setSelectedPeriod(period);
  };
  return (
    <article className="flex flex-col items-center p-5 mx-4 bg-white rounded-xl shadow-2xl md:max-w-[901px]">
      <header className="flex flex-col w-full text-center text-sky-700 md:max-w-[808px] max-md:max-w-full">
        <div className="flex gap-3 justify-center py-3 px-2 text-2xl leading-8 whitespace-nowrap bg-sky-50 rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div
            className={`flex flex-col flex-1 justify-center font-bold ${
              selectedPeriod === "Quarterly"
                ? "text-slate-50"
                : "text-secondary"
            }`}
          >
            <button
              className={`justify-center px-16 py-5 rounded-xl max-md:px-5 ${
                selectedPeriod === "Quarterly"
                  ? "bg-primary"
                  : "bg-secondary-container"
              }`}
              onClick={() => handleClick("Quarterly")}
            >
              {" "}
              Quarterly{" "}
            </button>
          </div>
          <div
            className={`flex flex-col flex-1 justify-center font-bold ${
              selectedPeriod === "Bi-Annually"
                ? "text-slate-50"
                : "text-secondary"
            }`}
          >
            <button
              className={`justify-center px-14 py-5 rounded-xl max-md:px-5 ${
                selectedPeriod === "Bi-Annually"
                  ? "bg-primary"
                  : "bg-secondary-container"
              }`}
              onClick={() => handleClick("Bi-Annually")}
            >
              {" "}
              Bi-Annually{" "}
            </button>
          </div>
          <div
            className={`flex flex-col flex-1 justify-center font-bold ${
              selectedPeriod === "Annually" ? "text-slate-50" : "text-secondary"
            }`}
          >
            <button
              className={`justify-center items-center px-16 py-5 rounded-xl max-md:px-5 ${
                selectedPeriod === "Annually"
                  ? "bg-primary"
                  : "bg-secondary-container"
              }`}
              onClick={() => handleClick("Annually")}
            >
              {" "}
              Annually{" "}
            </button>
          </div>
        </div>
        <h1 className="mt-5 text-3xl leading-9 max-md:max-w-full">
          {" "}
          Practice Partner{" "}
          <span className="font-extrabold">
            {selectedPeriod === "Quarterly" && "3 months"}
            {selectedPeriod === "Bi-Annually" && "6 months"}
            {selectedPeriod === "Annually" && "12 months"}
          </span>{" "}
          plan{" "}
        </h1>
      </header>
      <p className="mt-5 text-base leading-6 text-zinc-700 max-md:max-w-full">
        Your comprehensive toolkit for establishing a successful practice.
        Unlimited access to Practice Partner's capabilities equipping you with
        essential tools and support for building a strong, sustainable business.
      </p>
      <section className="self-stretch mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <ul className="flex flex-col grow mt-11 text-2xl leading-7 text-black max-md:mt-10">
              {planFeatures.map(({ icon, text }) => (
                <li key={text} className="flex gap-4 py-1 mt-2 first:mt-0">
                  <img
                    loading="lazy"
                    src={icon}
                    alt=""
                    className="shrink-0 self-start w-5 aspect-[1.43] mt-2 fill-emerald-500"
                  />
                  <span className="flex-auto">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex flex-col md:self-end max-md:self-center md:text-right max-md:text-center">
                <div className="text-6xl text-sky-700 leading-[64px] max-md:text-4xl">
                  {selectedPeriod === "Quarterly" && "$350"}
                  {selectedPeriod === "Bi-Annually" && "$600"}
                  {selectedPeriod === "Annually" && "$980"}
                </div>
                <p className="self-start mt-2 ml-4 text-sm leading-5 text-zinc-700 max-md:ml-2.5">
                  Paid every {selectedPeriod === "Quarterly" && "3 months"}
                  {selectedPeriod === "Bi-Annually" && "6 months"}
                  {selectedPeriod === "Annually" && "12 months"}
                </p>
                <p className="self-center mt-2 ml-4 text-sm leading-5 text-zinc-700 max-md:ml-2.5">
                  {selectedPeriod === "Quarterly" && ""}
                  {selectedPeriod === "Bi-Annually" && "14% Discount"}
                  {selectedPeriod === "Annually" && "30% Discount"}
                </p>
              </div>
              <button className="justify-center items-center px-16 py-5 mt-2 text-base font-bold whitespace-nowrap bg-sky-700 rounded-xl text-slate-50 max-md:px-5">
                {" "}
                Subscribe{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default PlanInfoCard;
