import React from "react";

function Button({ onSave, onClose, isSaveDisabled }) {
  return (
    <div className="btn-row">
      <button type="button" className="btn save" onClick={onSave} disabled={isSaveDisabled}>
        Save
      </button>
      <button type="button" className="btn close" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Button;
