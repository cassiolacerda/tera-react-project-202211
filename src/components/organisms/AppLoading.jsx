import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function AppLoading() {
  return (
    <div className="center">
      <CircularProgress color="inherit" size={96} />
    </div>
  );
}
