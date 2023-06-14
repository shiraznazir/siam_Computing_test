import React from "react";
import { Typography, Box, Grid, Card, Fab } from "@mui/material";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const cardDetails = [
  {
    img: "https://siamcomputing.com/wp-content/uploads/2022/05/branding-150x150.png",
    title: "Skin in the game",
    desc: "We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.",
  },
  {
    img: "https://siamcomputing.com/wp-content/uploads/2022/05/app-development-150x150.png",
    title: "Product Mindset",
    desc: "From the product manager all the way down to the engineer. Everyone is aligned on doing what is right for the user. We invest time and money learning frameworks and ideas that help our startup founders.",
  },
  {
    img: "https://siamcomputing.com/wp-content/uploads/2022/05/team-150x150.png",
    title: "Developing for Scale",
    desc: "We understand you are solving problems with a large impact. At every step of the way, our dev team uses world-class practices to ensure whatever is built stands the test of time and scale.",
  },
];

const WhyUs = () => {
  return (
    <>
      <Box sx={{ mt: "50px" }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold" }} align="center">
            Why Us
          </Typography>
        </Box>
        <Box sx={{ p: "50px" }}>
          <Grid container spacing={8}>
            {cardDetails.map((item, index) => {
              return (
                <Grid item xs={12} md={4} key={index + 1}>
                  <Card
                    sx={{
                      boxShadow: 0,
                      p: "30px",
                      "&:hover": {
                        backgroundColor: "#FFF5F5",
                      },
                    }}
                    align="center"
                  >
                    <img
                      alt={`pic${index + 1}`}
                      src={item.img}
                      sx={{ padding: "40px" }}
                      width="97px"
                      height="97px"
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#444444",
                        p: "25px",
                      }}
                      align="center"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "20px",
                        color: "#444444",
                        p: "25px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Fab
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          bgcolor: "#DA4545",
          color: "#ffffff",
          "&:hover": { bgcolor: "#DA4545" },
        }}
      >
        <MapsUgcOutlinedIcon />
        <Typography variant="p" sx={{ fontWeight: "bold", pl: 1 }}>
          Hey, there!
        </Typography>
      </Fab>
    </>
  );
};

export default WhyUs;
