import React, { useMemo } from "react";
import Row from "./ProductTags/Rows";
import Prices from "./ProductTags/Prices";
import Attributes from "./ProductTags/Attributes";
import Button from "./ProductTags/Button";

function Product({ formData, onFieldChange, onSave, onClose, isEditing, isSaveDisabled }) {
  const heading = useMemo(() => (isEditing ? "Edit Product" : "Add Product"), [isEditing]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFieldChange(name, value);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <p>{isEditing ? "Update the fields below and press Save." : "Fill out the fields below to create a product."}</p>
      <div className="form-container">
        <Row
          label="Code"
          type="text"
          holder="Enter the code"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
        />
        <Row
          label="Name"
          type="text"
          holder="Enter the name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Prices formData={formData} onChange={handleInputChange} />
        <Row
          label="Classification"
          type="text"
          holder="Enter the classification"
          name="cls"
          value={formData.cls}
          onChange={handleInputChange}
        />
        <Attributes formData={formData} onChange={handleInputChange} />
      </div>
      <Button onSave={onSave} onClose={onClose} isEditing={isEditing} isSaveDisabled={isSaveDisabled} />
    </div>
  );
}

export default Product;
