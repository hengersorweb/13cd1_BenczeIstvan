import { useState, useEffect } from "react";
import axios from "axios";
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
import Select from "./Select.jsx";

function TablazatSzoba({ selectedRoom }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (selectedRoom) {
            axios.get(`http://localhost:3001/foglaltsag/${selectedRoom}`)
                .then(response => setData(response.data))
                .catch(error => console.error("Hiba:", error));
        }
    }, [selectedRoom]); // Figyeljük a selectedRoom változást

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
                            <td className="text-center">{row.erk} </td>
                            <td className="text-center">{row.tav} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default TablazatSzoba;