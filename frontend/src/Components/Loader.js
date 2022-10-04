import React, { useState, useRef, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  const [parentSize, setParentSize] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    const { clientHeight, clientWidth } = parentRef.current;

    setParentSize(Math.min(clientHeight, clientWidth));
  }, []);

  return (
    <Box
      ref={parentRef}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0,0,30,0.4)",
        position: "absolute",
        zIndex: 999,
      }}
    >
      <CircularProgress
        size={0.3 * parentSize}
        style={{ marginTop: "140px" }}
      />
    </Box>
  );
}
