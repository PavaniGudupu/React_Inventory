import { Router } from "express";
import { query } from "../db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await query("SELECT * FROM products ORDER BY code ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("GET /products failed", error);
    res.status(500).json({ message: "Unable to fetch products" });
  }
});

router.post("/", async (req, res) => {
  const {
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
    material,
  } = req.body;

  try {
    const insertQuery = `
      INSERT INTO products (code, name, mrp, sp, cp, tax, cls, size, color, brand, material)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;

    const params = [code, name, mrp, sp, cp, tax, cls, size, color, brand, material];
    const result = await query(insertQuery, params);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("POST /products failed", error);
    res.status(500).json({ message: "Unable to create product" });
  }
});

router.put("/:code", async (req, res) => {
  const { code } = req.params;
  const {
    name,
    mrp,
    sp,
    cp,
    tax,
    cls,
    size,
    color,
    brand,
    material,
  } = req.body;

  try {
    const updateQuery = `
      UPDATE products
      SET name = $1,
          mrp = $2,
          sp = $3,
          cp = $4,
          tax = $5,
          cls = $6,
          size = $7,
          color = $8,
          brand = $9,
          material = $10
      WHERE code = $11
      RETURNING *
    `;

    const params = [name, mrp, sp, cp, tax, cls, size, color, brand, material, code];
    const result = await query(updateQuery, params);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("PUT /products/:code failed", error);
    res.status(500).json({ message: "Unable to update product" });
  }
});

router.delete("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    const deleteQuery = "DELETE FROM products WHERE code = $1";
    const result = await query(deleteQuery, [code]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("DELETE /products/:code failed", error);
    res.status(500).json({ message: "Unable to delete product" });
  }
});

export default router;
