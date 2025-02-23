import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import TablazatSzoba from "./TablazatSzoba";

function Select() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(""); // Kezdetben üres
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/szobak')
            .then(response => setRooms(response.data))
            .catch(error => console.error("Hiba történt a szobák lekérésekor:", error));
    }, []);

    const handleSelect = async (event) => {
        const szazon = event.target.value;
        setSelectedRoom(szazon);
        
        if (!szazon) {
            setRoomDetails(null);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/szoba/${szazon}`);
            setRoomDetails(response.data);
        } catch (error) {
            console.error("Hiba történt a szoba adatainak lekérésekor:", error);
            setRoomDetails(null);
        }
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
                    <TablazatSzoba selectedRoom={selectedRoom} />
                </div>
            )}
        </div>
    );
}

export default Select;
