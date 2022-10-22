import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


function App() {
  const [pexelsImage,setPexelsImage] = useState ([]); 
  const getImage = async () => {
  const data=await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=6`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: "563492ad6f91700001000001392c27a34e9b4a3ba777dc6baa95c054",     //use the apikey you have generated
        },
    });
    const response= await data.json();   //convert the response to json 
    setPexelsImage(response.photos);
  }
  useEffect(()=> {
    getImage();
  },[!pexelsImage.length == false]);
  
  console.log(pexelsImage)
  
  return (
    <>
       <div id="container" className="container mw-50 mh-50">
        <h1 className='text-center '>Photographer's Showcase</h1>
        {pexelsImage.map((imageDetails,id) => {
           <div className="card-group py-5 px-5">
           <div className="card mx-5">
             <img src={imageDetails[id]?.src?.large} className="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title text-center">Image by:{imageDetails[id]?.id}</h5>
             </div>
           </div>
           </div>
        })}
        </div>
    </>
  );
}

export default App;
