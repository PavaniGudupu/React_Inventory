import React, { useMemo } from "react";
import Label from "./Label";
import Input from "./Input";

function Row({ label, type = "text", holder = "", name, value, onChange }) {
  const inputId = useMemo(() => (name ? `input-${name}` : undefined), [name]);

  return (
    <div className="row">
      <Label text={label} htmlFor={inputId} />
      <Input
        inputType={type}
        inputHolder={holder}
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Row;
