import React from "react";
import Popper from "@mui/base/Popper";
import { List, ListItem } from "@mui/material";

export default function SimplePopper({ id, open, anchorEl, data, handleLeave }) {

  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <List onMouseLeave={handleLeave} sx={{ boxShadow: 5, mt: 3, bgcolor: "background.paper" }}>
          {data.map((element, index) => {
            return (
              <ListItem key={index+1} sx={{ p: 2, "&:hover": { color: "#DA4545" } }}>
                {element}
              </ListItem>
            );
          })}
        </List>
      </Popper>
    </div>
  );
}
