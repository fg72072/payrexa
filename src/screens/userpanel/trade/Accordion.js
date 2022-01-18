import React, { useState } from "react";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <li className="">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        {isActive ? <i class="fa-solid fa-minus"></i> :<i class="fa-solid fa-plus"></i>}<span>{heading}</span>
      </div>
    </li>
    {<div className={isActive == false ? "accordion-content custom-accordion-hide" : "accordion-content custom-accordion-show"}>{ content}</div>}
    
    </>
  );
};

export default Accordion;