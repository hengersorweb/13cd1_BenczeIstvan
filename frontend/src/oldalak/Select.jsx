import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import TablazatSzoba from "./TablazatSzoba";

function Select() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(""); //  Kezdetben üres
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/szobak')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);

    const handleSelect = (event) => {
        const szazon = event.target.value;
        setSelectedRoom(szazon);

        fetch(`http://localhost:3001/szoba/${szazon}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data));
    };

    return (
        <div>
            <select onChange={handleSelect} value={selectedRoom}>
                <option value="">Válassz egy szobát</option>
                {rooms.map(room => (
                    <option key={room.szazon} value={room.szazon}>{room.sznev}</option>
                ))}
            </select>
            {roomDetails && (
                <div>
                    <h3>Szoba adatai</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Szoba neve</th>
                                <th scope="col">Ágyak száma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{roomDetails.sznev}</td>
                                <td>{roomDetails.agy}</td>
                            </tr>
                        </tbody>
                    </table>
            <TablazatSzoba selectedRoom={selectedRoom} /> {/*  Biztosan renderelődik mindig */}

            
                </div>
            )}
        </div>
    );
}

export default Select;
