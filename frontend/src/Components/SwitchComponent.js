import React from "react";
import CustomDataGrid from "../Components/CustomDataGrid";
import Agencies from "../pages/Agencies/Agencies";
import Categories from "../pages/Categories/Categories";
import Company from "../pages/Company/Company";
import Entity from "../pages/Entity/Entity";
import Industry from "../pages/Industry/Industry";
import KPIs from "../pages/KPIs/KPIs";
import Plant from "../pages/Plant/Plant";
import Roles from "../pages/Roles/Roles";
import SubIndustry from "../pages/SubIndustry/SubIndustry";
import Unit from "../pages/Unit/Unit";
import UnitGroup from "../pages/UnitGroup/UnitGroup";
import Users from "../pages/Users/Users";
import Loader from "./Loader";

function SwitchComponent({ component }) {
  const SelectComponent = ({ selected = "" }) => {
    switch (selected) {
      case "Dashboard":
        return <div>{selected}</div>;
      case "Role":
        return <div>{selected}</div>;
      case "Plant":
        return <Plant />;
      case "Agencies":
        return <Agencies />;
      case "Categories":
        return <Categories />;
      case "Company":
        return <Company />;
      case "Entity":
        return <Entity />;
      case "Industry":
        return <Industry />;
      case "KPI's":
        return <KPIs />;
      case "Sub-Industry":
        return <SubIndustry />;
      case "Unit":
        return <Unit />;
      case "Unit Group":
        return <UnitGroup />;
      case "User's":
        return <Users />;
      case "Roles":
        return <Roles />;
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
