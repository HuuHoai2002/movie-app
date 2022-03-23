import React from "react";
import ButtonCircle from "./components/button/ButtonCircle";
import ButtonPrimary from "./components/button/ButtonPrimary";
import ButtonSecondary from "./components/button/ButtonSecondary";
import IMDBIcon from "./components/button/IMDBIcon";

const App = () => {
  return (
    <div className="mx-auto p-10 flex items-center gap-x-10">
      <ButtonPrimary title={"Watch"}>Watch</ButtonPrimary>
      <ButtonSecondary title={"Thêm"}></ButtonSecondary>
      <h1 className="text-textcolor font-medium text-xl">HIHII</h1>
      <ButtonCircle></ButtonCircle>
      <ButtonCircle changeType={true}></ButtonCircle>
      <span className="flex gap-x-2 items-center">
        <IMDBIcon></IMDBIcon>
        9.2
      </span>
    </div>
  );
};

export default App;
