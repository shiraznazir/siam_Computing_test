import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Slider from "../Slider";

const imgUrl = [
  "https://siamcomputing.com/wp-content/uploads/2022/05/NWS-logo-removebg-preview.png",
  "https://siamcomputing.com/wp-content/uploads/2022/05/Navya-logo-removebg-preview.png",
  "https://siamcomputing.com/wp-content/uploads/2022/05/Detect-logo-removebg-preview.png",
  "https://siamcomputing.com/wp-content/uploads/2022/07/Xcode-logo.png",
  "https://siamcomputing.com/wp-content/uploads/elementor/thumbs/SPI-Cinemas-Logo-removebg-preview-pr2ecblb60iwjppbtttj7lrevoww6dctordc2uljgs.png",
  "https://siamcomputing.com/wp-content/uploads/2022/05/I-wanna-learn-logo-768x130.png",
];

const Body = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#FFFDFD",
          color: "#333333",
          alignItems: "center",
          mt: "100px",
          pl: matches ? "50px" : "15px",
          pt: matches ? "50px" : "15px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: matches ? "5rem" : "2rem",
                p: matches ? "10px" : "5px",
              }}
              align={matches ? "left" : "center"}
            >
              Startups need to scale fast. We get it.
            </Typography>
            {!matches && (
              <img
                alt="img"
                width="100%"
                src="https://siamcomputing.com/wp-content/uploads/elementor/thumbs/slazzer-edit-image-2-pr2h3azl01wsmnnzuf26gsmaedcx6w8oys4nblgmc4.png"
              />
            )}
            <Typography
              variant="h5"
              sx={{
                fontSize: matches ? "1.6rem" : "1rem",
                p: matches ? "15px" : "5px",
                pl: matches ? "40px" : "5px",
              }}
              align={matches ? "left" : "center"}
            >
              Our skin in the game philosophy enables multiple iterations, lower
              cash burn and a faster road to product-market fitment.
            </Typography>
            <Box
              sx={{
                p: "15px",
                mt: "30px",
                ml: matches ? "40px" : "0px",
                width: matches ? "350px" : "290px",
                height: matches ? "50px" : "30px",
                bgcolor: "#000000",
                borderRadius: 1,
                color: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: matches ? "1.6rem" : "0.75rem",
                "&:hover": {
                  bgcolor: "#da4545",
                },
              }}
              align={matches ? "left" : "center"}
            >
              <Typography variant="h5">Get in touch with an expert</Typography>
            </Box>
          </Grid>
          <Grid sx={{ bgColor: "#FFFAEF" }} item xs={12} md={4}>
            {matches && (
              <img
                alt="img"
                width="100%"
                src="https://siamcomputing.com/wp-content/uploads/elementor/thumbs/slazzer-edit-image-2-pr2h3azl01wsmnnzuf26gsmaedcx6w8oys4nblgmc4.png"
              />
            )}
          </Grid>
        </Grid>

        {matches && (
          <Grid container spacing={2}>
            <Grid item md={2} sx={{ mt: 0 }}>
              <img
                alt="img1"
                width="171px"
                height="110px"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/NWS-logo-removebg-preview.png"
              />
            </Grid>
            <Grid item md={2} sx={{ mt: 2 }}>
              <img
                alt="img2"
                width="83px"
                height="83px"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/Navya-logo-removebg-preview.png"
              />
            </Grid>
            <Grid item md={2} sx={{ mt: 2 }}>
              <img
                alt="img3"
                width="124px"
                height="82px"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/Detect-logo-removebg-preview.png"
              />
            </Grid>
            <Grid item md={2} sx={{ mt: 2 }}>
              <img
                alt="img4"
                width="85px"
                height="85px"
                src="https://siamcomputing.com/wp-content/uploads/2022/07/Xcode-logo.png"
              />
            </Grid>
            <Grid item md={2} sx={{ mt: 2 }}>
              <img
                alt="img5"
                width="96px"
                height="96px"
                src="https://siamcomputing.com/wp-content/uploads/elementor/thumbs/SPI-Cinemas-Logo-removebg-preview-pr2ecblb60iwjppbtttj7lrevoww6dctordc2uljgs.png"
              />
            </Grid>
            <Grid item md={2} sx={{ mt: 7 }}>
              <img
                alt="img6"
                width="149px"
                height="25px"
                src="https://siamcomputing.com/wp-content/uploads/2022/05/I-wanna-learn-logo-768x130.png"
              />
            </Grid>
          </Grid>
        )}
        {!matches && <Slider images={imgUrl}/>}
      </Box>
    </>
  );
};

export default Body;
