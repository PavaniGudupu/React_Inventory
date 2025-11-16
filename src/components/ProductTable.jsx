import React from "react";
import TableHead from "./Table/TableHead";
import TableRow from "./Table/TableRow";

function ProductTable({ products = [], onEdit, onDelete }) {
  return (
    <div>
      <h1>Product List</h1>

      <div className="form-container">
        <table className="prod-table">
          <TableHead />

          <tbody>
            {products.map((item, index) => (
              <TableRow
                key={item.code || index}
                index={index}
                code={item.code}
                name={item.name}
                mrp={item.mrp}
                sp={item.sp}
                cp={item.cp}
                tax={item.tax}
                cls={item.cls}
                size={item.size}
                color={item.color}
                brand={item.brand}
                mtrl={item.material}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="12">No products yet. Click ADD to create one.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
