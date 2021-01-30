import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../../styles/FourthPage.css";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const FourthPage = () => {
  const mouseEnterRef = useRef(null);
  const [Project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://res.cloudinary.com/classic-euphemist/image/list/gallery.json"
      )
      .then((res) => {
        // console.log(res.data.resources);
        setProject(res.data.resources);
      });
  }, []);

  let mouseEnter = () => {
    mouseEnterRef.current.addEventListener("mouseleave", () => {
      console.log("Mouse Leave");
    });
  };

  return (
    <div className="main_container">
      <div
        className="gallery_container"
        onMouseEnter={console.log("Mouse Enter")}
        onMouseLeave={console.log("Mouse Leave")}
      >
        <div className="gallery">
          <CloudinaryContext className="photo_gallery">
            {Project.map((data) => {
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
      <div className="Title">PHOTOGRAPHY</div>
    </div>
  );
};

export default FourthPage;
