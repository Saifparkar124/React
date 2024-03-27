import {useEffect, useState} from  'react'

function HSurah(surah){
    console.log(surah);
    const  [surahs, setSurahs] = useState([]);
    // Fetch surah data when component mounts
    useEffect(() =>{
        fetch(`http://api.alquran.cloud/v1/surah/${surah}/hi.farooq`).then(response => response.json()).then(data=>{setSurahs(data.data.ayahs)})}
        , [surah]);
    return surahs
}

export default HSurah;