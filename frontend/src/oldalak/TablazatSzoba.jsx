import { useState, useEffect } from "react";
import axios from "axios";
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'

function TablazatSzoba() {
    const [data, setData] = useState([]);
    const formatDate = (isoString) => isoString.split("T")[0];
    useEffect(() => {
        axios.get("http://localhost:3001/foglaltsag")
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba:", error));
    }, []);

    return (
        <div>
            <h2 className="text-center my-4">Szoba foglaltsága</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>A vendég neve</th>
                    <th>Szoba neve</th>
                    <th className="text-center">Érkezés dátuma</th>
                    <th className="text-center">Távozás dátuma</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.szazon}>
                        <td>{row.vnev} </td>
                        <td>{row.sznev} </td>
                        <td className="text-center">{formatDate(row.erk)} </td>
                        <td className="text-center">{formatDate(row.tav)} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default TablazatSzoba;