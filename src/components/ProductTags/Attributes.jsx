import React from "react";
import Input from "./Input";

function Attributes({ formData, onChange }) {
  return (
    <div className="row">
      <Input inputType="text" inputHolder="Size" name="size" value={formData.size} onChange={onChange} />
      <Input inputType="text" inputHolder="Color" name="color" value={formData.color} onChange={onChange} />
      <Input inputType="text" inputHolder="Brand" name="brand" value={formData.brand} onChange={onChange} />
      <Input inputType="text" inputHolder="Material" name="material" value={formData.material} onChange={onChange} />
    </div>
  );
}

export default Attributes;
