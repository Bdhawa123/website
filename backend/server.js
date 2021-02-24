let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "classic-euphemist",
  api_key: "662387219543668",
  api_secret: "QlNg3fYZl95rl1Z_rzGSMcX4JpU",
});

cloudinary.api.resources(
  {
    type: "upload",
    prefix: "project/",
  },
  (error, result) => {
    // console.log(error);
    console.log(result);
  }
);
