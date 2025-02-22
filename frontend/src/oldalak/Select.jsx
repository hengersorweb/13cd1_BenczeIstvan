import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
function Select() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
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
            <select onChange={handleSelect}>
                <option value="">Válassz egy szobát</option>
                {rooms.map(room => (
                    <option key={room.szazon} value={room.szazon}>{room.sznev}</option>
                ))}
            </select>

            {roomDetails && (
                <div>
                    <h3>Szoba adatai</h3>
                    <p>ID: {roomDetails.szazon}</p>
                    <p>Név: {roomDetails.sznev}</p>
                </div>
            )}
        </div>
    );
}
export default Select;