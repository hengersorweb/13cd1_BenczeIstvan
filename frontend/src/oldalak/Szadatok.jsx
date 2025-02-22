import { useEffect, useState } from 'react';
import axios from 'axios';  

function Szadatok({ szazon }) {
    const [Adatok, setAdatok] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/szoba/{szazon}")
        .then(response => setAdatok(response.Adatok))
        .catch(error => console.error("Hiba:", error));
    }, [szazon]);

    if (!Adatok) return <p>Betöltés...</p>;

    return (
        <div>
            <h3>Szoba adatai</h3>
            <p>ID: {Adatok.szazon}</p>
            <p>Név: {Adatok.sznev}</p>
        </div>
    );
}

export default Szadatok;