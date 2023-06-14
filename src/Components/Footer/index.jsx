import React from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
  grid1Box: {
    padding: "15px",
  },
  grid2Box: {
    padding: "15px",
  },
};

const Footer = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#333333",
          color: "#ffffff",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ p: matches ? "100px 100px 0px 100px" : "20px", }}>
          <Grid item xs={12} md={3}>
            <Box sx={style.grid1Box} align={matches ? "left" : "center"}>
              <img
                alt="logo"
                src="https://siamcomputing.com/wp-content/uploads/2021/09/footer-logo-siam.webp"
              />
            </Box>
            <Box sx={style.grid1Box}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                hello@siamcomputing.com
              </Typography>
            </Box>
            <Box sx={style.grid1Box}>
              <Typography
                sx={{ fontWeight: "bold" }}
                align={matches ? "left" : "center"}
              >
                No 30, 1st Main Road,
                <br /> Shastri Nagar,
                <br /> Adyar, Chennai,
                <br /> Tamil Nadu 600020
              </Typography>
            </Box>
            <Box sx={style.grid1Box}>
              <Stack
                direction="row"
                spacing={2}
                alignItems={matches ? "left" : "center"}
                justifyContent={matches ? "left" : "center"}
              >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <GoogleIcon />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ ...style.grid2Box, fontWeight: "bold" }}
              align={matches ? "left" : "center"}
            >
              Services
            </Typography>
            <Stack direction="column">
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Products Strategy And Consulting
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                MVP Development
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Dedicated Product Team
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ ...style.grid2Box, fontWeight: "bold" }}
              align={matches ? "left" : "center"}
            >
              About
            </Typography>
            <Stack direction="column">
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Our journey
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Life At Siam
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Careers
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ ...style.grid2Box, fontWeight: "bold" }}
              align={matches ? "left" : "center"}
            >
              Resources
            </Typography>
            <Stack direction="column">
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Blogs
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Case Studies
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...style.grid2Box,
                  fontSize: "14px",
                  "&:hover": { color: "#DA4545" },
                  cursor: "pointer",
                }}
                align={matches ? "left" : "center"}
              >
                Newsletter
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#ffffff" }} />
        <Box
          sx={{
            pt: matches ? "20px" : "10px",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography align="center">
            © Copyright 2023 siamcomputing. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
