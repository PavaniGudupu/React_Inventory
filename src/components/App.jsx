import React, { useState } from "react";
import ProductTable from "./ProductTable";
import Product from "./Product";

const createEmptyProduct = () => ({
  code: "",
  name: "",
  mrp: "",
  sp: "",
  cp: "",
  tax: "",
  cls: "",
  size: "",
  color: "",
  brand: "",
  material: "",
});

const seedProducts = [
  {
    code: "101",
    name: "Shirt",
    mrp: "799",
    sp: "599",
    cp: "400",
    tax: "5",
    cls: "Clothes",
    size: "no size",
    color: "color",
    brand: "no brand",
    material: "no material",
  },
  {
    code: "102",
    name: "Laptop",
    mrp: "55000",
    sp: "48999",
    cp: "42000",
    tax: "5",
    cls: "Clothes",
    size: "no size",
    color: "color",
    brand: "no brand",
    material: "no material",
  },
];

function App() {
  const [products, setProducts] = useState(seedProducts);
  const [formData, setFormData] = useState(createEmptyProduct);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleCloseForm = () => {
    setShowProductForm(false);
    setFormData(createEmptyProduct());
    setEditingIndex(null);
  };

  const handleAddClick = () => {
    setFormData(createEmptyProduct());
    setEditingIndex(null);
    setShowProductForm(true);
  };

  const handleEditProduct = (index) => {
    setFormData({ ...products[index] });
    setEditingIndex(index);
    setShowProductForm(true);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, idx) => idx !== index));
    if (editingIndex === index) {
      handleCloseForm();
    }
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProduct = () => {
    setProducts((prev) => {
      if (editingIndex !== null) {
        return prev.map((product, idx) => (idx === editingIndex ? { ...formData } : product));
      }
      return [...prev, { ...formData }];
    });
    handleCloseForm();
  };

  const isSaveDisabled = !formData.code.trim() || !formData.name.trim();

  return (
    <div>
      <div className="container">
        <ProductTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
        <button type="button" className="btn add" onClick={handleAddClick}>
          ADD
        </button>

        {showProductForm && (
          <div className="container">
            <Product
              formData={formData}
              onFieldChange={handleFieldChange}
              onSave={handleSaveProduct}
              onClose={handleCloseForm}
              isEditing={editingIndex !== null}
              isSaveDisabled={isSaveDisabled}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
