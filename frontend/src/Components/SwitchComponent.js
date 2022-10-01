import React from "react";
import CustomDataGrid from "../Components/CustomDataGrid";

function SwitchComponent({ component }) {
  const SelectComponent = ({ selected = "" }) => {
    switch (selected) {
      case "Dashboard":
        return <div>{selected}</div>;
      case "Role":
        return <div>{selected}</div>;
      case "Plant":
        return <CustomDataGrid />;
      default:
        return <div>Fallback UI</div>;
    }
  };
  return (
    <>
      <SelectComponent selected={component?.title || ""} />
    </>
  );
}

export default SwitchComponent;
