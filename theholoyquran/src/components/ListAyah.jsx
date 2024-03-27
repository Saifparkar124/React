import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Surah from "../hooks/AyahList";
import ESurah from "../hooks/enTransleration";
import HSurah from "../hooks/Htrans";

function ListAyah() {
  const { number } = useParams();

  console.log(number);

  const surah = Surah(number);
  const ensurah = ESurah(number);
  const hisurah = HSurah(number);

  // Assuming surah and ensurah have the same length
  const combinedAyahs = surah?.map((item, index) => ({
    arabicText: item?.text,
    ETranslation: ensurah[index]?.text,
    HTranslation: hisurah[index]?.text,
  }));

  return (
    <>
    {combinedAyahs ? (
      <div className="md:flex md:items-center md:justify-center">
        <ul className="md:w-[50vw]">
          {combinedAyahs?.map((ayah, index) => (
            <li key={index}>
              <div className="flex flex-col justify-between border p-4 m-5 rounded-lg font-semibold">
                <h3 className="text-right md:text-4xl text-3xl font-extrabold font-serif mb-2 opacity-90 text-green-950">
                  {ayah?.arabicText}
                </h3>
                <h3 className="gap-y-3 text-xl font-normal italic opacity-75">{ayah?.ETranslation}</h3>
                <h3 className="gap-y-5 text-xl font-semibold opacity-85">{ayah?.HTranslation}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>) : (<div>loading</div>)}
    </>
  );
}

export default ListAyah;
