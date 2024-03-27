import {useEffect, useState} from  'react'

function Surah(surah){
    console.log(surah);
    const  [surahs, setSurahs] = useState([]);
    // Fetch surah data when component mounts
    useEffect(() =>{
        fetch(`http://api.alquran.cloud/v1/surah/${surah}`).then(response => response.json()).then(data=>{setSurahs(data.data.ayahs)})}
        , [surah]);
    return surahs
}

export default Surah;