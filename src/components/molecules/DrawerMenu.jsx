import React from "react";
import Drawer from "@mui/material/Drawer";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      Menu
    </Drawer>
  );
}
