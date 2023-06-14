import React, { useState } from "react";
import {
  AppBar,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  ClickAwayListener,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import SimplePopper from "../Popover";

const style = {
  callBtnStyle: {
    border: "2px solid black",
    borderRadius: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "20px",
    "&:hover": {
      border: "2px solid #da4545",
      backgroundColor: "#da4545",
      color: "#ffffff",
    },
  },
  textStyle: {
    fontWeight: "bold",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#da4545",
    },
    mt: "10px",
  },
  menuLiStyle: {
    padding: "25px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#ff0000",
    },
  },
};

const services = [
  "Products Strategy And Consulting",
  "MVP Development",
  "Dedicated Product Team",
];

const skills = [
  "Mobile App Development",
  "Hybrid App Development",
  "React Native Development",
  "Progressive Web App Development",
  "Web Portal Development",
];

const about = ["Our journey", "Life At Siam", "Careers"];

const resources = ["Blogs", "Case Studies", "Guides", "Newsletter"];

const Header = () => {
  const matches = useMediaQuery("(min-width:700px)");
  const [listData, setListData] = useState("");
  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, data) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setListData(data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#FFFDFD",
          color: "#333333",
          p: matches ? "25px" : "15px",
          boxShadow: scroll ? 5 : 0,
          pl: matches ? "50px": "0px",
          pr: matches ? "150px" : "0px"
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          justifyContent="space-between"
          useFlexGap
          flexWrap="wrap"
        >
          <img
            alt="logo"
            src="https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png"
            width={matches ? "150px" : "91px"}
            height={matches ? "75px" : "51px"}
            // style={{ padding: "10px" }}
          />
          <ClickAwayListener onClickAway={handleClose}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
              textAlign="center"
              // marginRight="50px"
            >
              {matches && (
                <Box
                  sx={style.boxStyle}
                  onMouseOver={(e) => handleClick(e, services)}
                >
                  <Typography variant="h5" sx={style.textStyle}>
                    Services
                  </Typography>
                  <ArrowDropDownIcon />
                </Box>
              )}
              {matches && (
                <Box
                  sx={style.boxStyle}
                  aria-describedby={id}
                  onMouseOver={(e) => handleClick(e, skills)}
                >
                  <Typography variant="h5" sx={style.textStyle}>
                    Skills
                  </Typography>
                  <ArrowDropDownIcon />
                </Box>
              )}
              {matches && (
                <Box
                  sx={style.boxStyle}
                  onMouseOver={(e) => handleClick(e, about)}
                >
                  <Typography variant="h5" sx={style.textStyle}>
                    About
                  </Typography>
                  <ArrowDropDownIcon />
                </Box>
              )}
              {matches && (
                <Box
                  sx={style.boxStyle}
                  onMouseOver={(e) => handleClick(e, resources)}
                >
                  <Typography variant="h5" sx={style.textStyle}>
                    Resources
                  </Typography>
                  <ArrowDropDownIcon />
                </Box>
              )}
              <Box sx={style.callBtnStyle}>Book a free call</Box>
              {!matches && (
                <Box>
                  <MenuIcon
                    fontSize="large"
                    sx={{ color: "#ff0000", mt: 0.5 }}
                  />
                </Box>
              )}
            </Stack>
          </ClickAwayListener>
        </Stack>
      </AppBar>
      {open && (
        <SimplePopper
          id={id}
          open={open}
          anchorEl={anchorEl}
          data={listData}
          handleLeave={handleClose}
        />
      )}
    </>
  );
};

export default Header;
