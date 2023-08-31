import React, { useState , useEffect } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import axios from "axios";

const App = () => {
  const [searchImages , setsearchImages] = useState("Anime");
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=28073605-eb5bbf72074ca81ce4c12ce79&q=${searchImages}&orientation=vertical`)
      .then((res) => {
        setimages(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchImages]);


  const handleChange = (e) => {
    setsearchImages(e.target.value);
    console.log("You entered" + " " + e.target.value); 
  }
  return ( 
    <>
     <Navbar handleChange={handleChange}/>
     <Cards images={images}/>
    </>
  )
}

export default App