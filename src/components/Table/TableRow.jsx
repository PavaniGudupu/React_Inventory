import React from "react";

function TableRow({
  index,
  code,
  name,
  mrp,
  sp,
  cp,
  tax,
  cls,
  size,
  color,
  brand,
  mtrl,
  onEdit,
  onDelete,
}) {
  const handleEdit = () => {
    if (typeof onEdit === "function") {
      onEdit(index);
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === "function") {
      onDelete(index);
    }
  };

  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{mrp}</td>
      <td>{sp}</td>
      <td>{cp}</td>
      <td>{tax}</td>
      <td>{cls}</td>
      <td>{size}</td>
      <td>{color}</td>
      <td>{brand}</td>
      <td>{mtrl}</td>
      <td className="action-btns">
        <button type="button" className="btn save" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" className="btn close" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
