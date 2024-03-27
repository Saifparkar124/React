import {useEffect, useState} from  'react'

function SurahList(SurahList){
    const  [surahs, setSurahs] = useState([]);
    // Fetch surah data when component mounts
    useEffect(() =>{
        fetch("http://api.alquran.cloud/v1/surah").then(response => response.json()).then(data=>{setSurahs(data.data)
        // console.log(data.data)
    })}
        , [SurahList]);
    return surahs
}

export default SurahList;