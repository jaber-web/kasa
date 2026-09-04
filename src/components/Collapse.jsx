import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="collapse__arrow"></span>
      </button>

      <div className="collapse__content">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;