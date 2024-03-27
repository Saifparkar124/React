import React from "react";
import {Link} from "react-router-dom";
import SurahList from "../hooks/SurahList";

function ListSurrah({}) {
  const list = SurahList();
  return (
    <>
      <div className=" md:flex md:items-center md:justify-center m-5">
        <ul key={[...list].length} className="md:w-[50vw]">
          {list.map((element) => {
            // console.log(element);
            return (
              <Link to={`surah/${element.number}`} key={element.number} >
              <div  className="flex flex-wrap hover:bg-lime-600 hover:text-white border px-2 py-3 m-5 rounded-lg ">
                <li className="w-full flex  justify-between items-center font-serif" key={element.number}>
                  <div>
                    <h3 className="text-xl">{element.englishName}</h3>
                    <h6 className="text-xs text-wrap" >{element.englishNameTranslation}</h6>
                  </div>
                  <div>
                    <h5 className="text-xl">{element.name}</h5>
                  </div>
                </li>
              </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListSurrah;
