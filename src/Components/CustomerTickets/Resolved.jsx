import React from "react";

const Resolved = (props) => {
  const ticket = props.element;
  return (
    <div className="resolved-item mb-3">
      <div className="bg-indigo-100 py-3 px-4 rounded-lg border border-indigo-200">
        <h3 className="text-lg font-semibold text-indigo-900 text-center truncate">
          {ticket?.title || "No title available"}
        </h3>
      </div>
    </div>
  );
};

export default Resolved;