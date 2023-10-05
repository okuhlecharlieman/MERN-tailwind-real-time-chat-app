import React from "react";

function stepper() {
  return (
    <div>
      <ol className="steps">
        <li className="step step-primary step-active  overflow-hidden">
          <div className="step-circle">1</div>
          <h3>Acount</h3>
        </li>
        {/* step-done  */}
        <li className="step step-primary overflow-hidden">
          <div className="step-circle">2</div>
          <h3>Personal </h3>
        </li>
        <li className="step step-primary  overflow-hidden">
          <div className="step-circle">3</div>
          <h3>Submit</h3>
        </li>
      </ol>
    </div>
  );
}

export default stepper;
