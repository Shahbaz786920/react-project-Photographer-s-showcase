import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


function App() {
  const [pexelsImage, setPexelsImage] = useState([]);

  const getImage = async () => {
    const data = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=6`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "563492ad6f91700001000001392c27a34e9b4a3ba777dc6baa95c054",
        },
      });
    const response = await data.json();
    setPexelsImage(response?.photos);
  }
  useEffect(() => {
    getImage();
  }, []);

  console.log(pexelsImage)

  return (
    <>
      <div id="container" className="container mw-50 mh-50">
        <h1 className='text-center '>Photographer's Showcase</h1>
        <div className="container">
          <div className="card-group">
            <div className="card m-5">
              <img src={pexelsImage[0]?.src?.original} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-center card-title">Image By: {pexelsImage[0]?.photographer}</h5>
              </div>
            </div>
            <div className="card m-5">
              <img src={pexelsImage[1]?.src?.original} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-center card-title">Image By: {pexelsImage[1]?.photographer}</h5>
              </div>
            </div>
            <div className="card m-5">
              <img src={pexelsImage[2]?.src?.original} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-center card-title">Image By: {pexelsImage[2]?.photographer}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="card-group">
            <div class="card m-5">
              <img src={pexelsImage[3]?.src?.original} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="text-center card-title">Image By: {pexelsImage[3]?.photographer}</h5>
              </div>
            </div>
            <div class="card m-5">
              <img src={pexelsImage[4]?.src?.original} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="text-center card-title">Image By: {pexelsImage[4]?.photographer}</h5>
              </div>
            </div>
            <div class="card m-5">
              <img src={pexelsImage[5]?.src?.original} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="text-center card-title">Image By: {pexelsImage[5]?.photographer}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;