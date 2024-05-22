
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { Query } = require("pg");

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a inventory item
app.post("/items", async(req,res) => {
    try {
        const query = "INSERT INTO items(description) VALUES ($1) RETURNING *";
        const { description } = req.body
        const newItem = await pool.query(query,[description]);

        res.json(newItem.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
});


//get all inventory items
app.get("/items", async(req,res) => {
    try{
        const query = "SELECT * FROM items"
        const allItems = await pool.query(query,);

        res.json(allItems.rows);

    } catch (err) {
        console.log(err.message);
    }
});


//get an inventory item
app.get("/items/:id", async(req,res) => {
    try {
        const query = "SELECT * FROM todo WHERE item_id = $1";
        const { id } = req.params;
        const item = await  pool.query(query, [id]);

        res.json(item.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
});


//update an inventory item
app.put("/items/:id", async(req,res) => {
    try {
        const query = "UPDATE item SET description = $1 WHERE item_id = $2 RETURNING *";
        const { id } = req.params;
        const { description } = req.body;
        const updateItem = await pool.query(query,
            [description, id]
        );

        res.json(updateTodo.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
});

//delete a inventory item
app.delete("/items/:id", async(req,res) => {
    try {
        const query = "DELETE FROM items WHERE item_id = $1";
        const { id } = req.params;
        const deleteItem = await pool.query(query,
            [ id ]
        );

        res.json("Item was deleted");

    } catch (err) {
        console.log(err.message);
    }
});


app.listen(4000, () => {
    console.log("server has started on port 4000");
});
