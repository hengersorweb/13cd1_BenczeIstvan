const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(cors());                    

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "Hengersor35",
    database: "fogado",
}); 

app.get("/", (req, res) => {
    res.send("Fut a backend!");
})


// vendég lista
app.get("/vendegek", (req, res) => {
    const sql = "SELECT * FROM `vendegek`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.get("/szobak", (req, res) => {
    const sql = "SELECT * FROM `szobak`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})


//szoba foglaltsága

app.get("/szobakfoglaltsaga", (req, res) => {
    const sql = "SELECT szobak.szazon, szobak.sznev, vendegek.vnev,foglalasok.erk,foglalasok.tav FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz WHERE szobak.szazon = 1 ORDER BY vendegek.vnev"
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})


//régió törlése
app.delete("/torles/:id", (req, res) => {
    const sql = "DELETE FROM `sportagak` WHERE sportagID = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})


app.listen(3001, () => {
    console.log("Server is running on port 3001");
}); 

                                                                                                                                              
