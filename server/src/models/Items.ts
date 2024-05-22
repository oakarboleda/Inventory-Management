export {};
const client = require("../config/db");

module.exports.getAll = async () => {
  const query: string = `SELECT * FROM items`;

  try {
    const res = await client.query(query);
    return res.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports.getById = async (id: number) => {
  const query: string = `SELECT * FROM items WHERE item_id = ($1) LIMIT 1`;

  try {
    const res = await client.query(query, [id]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports.create = async (
  item_name: string,
  item_description: string,
  category_id: number,
  location_id: number,
  purchase_date: Date,
  purchase_price: number,
  quantity: number
) => {
  const query: string = `INSERT INTO items (item_name, item_description, category_id, location_id,purchase_date ) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  try {
    const res = await client.query(query, [
      item_name,
      item_description,
      category_id,
      location_id,
      purchase_date,
    ]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports.drop = async (): Promise<void> => {
  try {
    await client.connect();
    const dropTableQuery = "DROP TABLE IF EXISTS items;";
    await client.query(dropTableQuery);
    console.log('Table "items" deleted successfully.');
  } catch (err) {
    console.error('Error deleting table "items":', err);
  } finally {
    await client.end();
  }
};
