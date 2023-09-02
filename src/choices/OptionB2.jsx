import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OptionB2() {
  const navigate = useNavigate();
  const [light, setLight] = useState();
  const [lightVal, setLightVal] = useState("");

  const sendEval = (val) => navigate(val);

  const choiceHandler = async () => {
    if (light >= 0 && light < 2) {
      setLightVal("dim");
      return sendEval(lightVal);
    } else if (light >= 2 && light < 5) {
      setLightVal("low");
      return sendEval(lightVal);
    } else if (light >= 5 && light < 8) {
      setLightVal("moderate");
      return sendEval(lightVal);
    } else {
      setLightVal("strong");
      return sendEval(lightVal);
    }
  };

  return (
    <div>
      <label htmlFor="obsInp">Enter obs light value 1-10</label>
      <input
        type="number"
        value={light}
        id="obsInp"
        onChange={(e) => setLight(e.target.value)}
        min={1}
        max={10}
      />
      <button onClick={() => choiceHandler(light)}>Submit</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

export default OptionB2;
