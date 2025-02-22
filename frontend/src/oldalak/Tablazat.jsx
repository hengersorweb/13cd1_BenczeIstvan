import { useState, useEffect } from "react";
import axios from "axios";
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'

function Tablazat() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/szobak")
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba:", error));
    }, []);

    return (
        <div>
            <h2 className="text-center my-4">Szoba lista</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Szoba neve</th>
                    <th>Ágyak száma</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.szazon}>
                        <td>{row.sznev}</td>
                        <td>{row.agy}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default Tablazat;