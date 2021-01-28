import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/FourthPage.css";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const FourthPage = () => {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://res.cloudinary.com/classic-euphemist/image/list/gallery.json"
      )
      .then((res) => {
        console.log(res.data.resources);
        setProject(res.data.resources);
      });
  }, []);

  return (
    <div className="main_container">
      <div className="Title">PHOTOGRAPHY</div>
      <div className="glass_pane">
        <div className="gallery">
          <CloudinaryContext
            cloudName="classic-euphemist"
            className="photo_gallery"
          >
            {Project.map((data) => {
              console.log(data);
              return (
                <div key={`${data.public_id}.jpg `}>
                  <img
                    alt={data.version}
                    src={`https://res.cloudinary.com/classic-euphemist/image/upload/${data.public_id}.jpg`}
                  />
                </div>
              );
            })}
          </CloudinaryContext>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
