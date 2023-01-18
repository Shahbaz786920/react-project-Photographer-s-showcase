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
      <div id="container" className="container mw-100 mh-100">
        <h1 className='text-center '>Photographer's Showcase</h1>
        <div className="container">
          <div className="card_group">
            {pexelsImage.map((item, id) => (
              <div className="card m-5" key={id}>
                <img src={item?.src?.original} style={{ height: '310px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center card-title">Image By: {item?.photographer}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;