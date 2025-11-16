import React from "react";
import Input from "./Input";

function Prices({ formData, onChange }) {
  return (
    <div className="row">
      <Input inputType="number" inputHolder="CP" name="cp" value={formData.cp} onChange={onChange} />
      <Input inputType="number" inputHolder="Tax" name="tax" value={formData.tax} onChange={onChange} />
      <Input inputType="number" inputHolder="MRP" name="mrp" value={formData.mrp} onChange={onChange} />
      <Input inputType="number" inputHolder="SP" name="sp" value={formData.sp} onChange={onChange} />
    </div>
  );
}

export default Prices;
