import React, { useEffect, useState } from "react";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const FourthPage = () => {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://res.cloudinary.com/classic-euphemist/image/list/IOT.json")
      .then((res) => {
        console.log(res.data.resources);
        setProject(res.data.resources);
      });
  }, []);

  return (
    <div className="gallery">
      <CloudinaryContext cloudName="classic-euphemist">
        {Project.map((data) => {
          console.log(data);
          return (
            <div key={`${data.public_id}.jpg`}>
              {/* <img
                src={`https://res.cloudinary.com/classic-euphemist/image/upload/${data.public_id}.jpg`}
              /> */}
              <Image publicId={data.publicId}>
                <Transformation
                  crop="scale"
                  width="300"
                  height="200"
                  dpr="auto"
                  responsive_placeholder="blank"
                />
              </Image>
            </div>
          );
        })}
      </CloudinaryContext>
    </div>
  );
};

export default FourthPage;
