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

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// Összes szoba lekérése
app.get('/szobak', (req, res) => {
    db.query('SELECT * FROM szobak', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Egy adott szoba adatainak lekérése
app.get('/szoba/:szazon', (req, res) => {
    const { szazon } = req.params;
    db.query('SELECT * FROM szobak WHERE szazon = ?', [szazon], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});


app.get("/szoba/", (req, res) => {
    const sql = "SELECT sznev FROM `szobak` WHERE szazon = 2";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})


//szobák listája
app.get("/szobak", (req, res) => {
    const sql = "SELECT * FROM `szobak`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})
// vendég lista
app.get("/vendegek", (req, res) => {
    const sql = "SELECT * FROM `vendegek`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})


//szoba foglaltsága

app.get("/foglaltsag", (req, res) => {
    const sql = "SELECT szobak.szazon, szobak.sznev, vendegek.vnev,foglalasok.erk,foglalasok.tav FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz WHERE szobak.szazon = 2 ORDER BY vendegek.vnev"
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})





app.listen(3001, () => {
    console.log("Server is running on port 3001");
}); 

                                                                                                                                              
