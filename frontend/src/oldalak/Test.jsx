import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
function Test() {
    const [data, setData] = useState([]);
    const [selectData, setSelectedData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/szobak")
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba:", error));
    }, []);
    return (
        <div className="container-fluid col-md-6">
            <h2 className="align-baseline text-capitalize">Szobalista</h2>
            <label>
                <select className="form-select"
                    name="selectData" value={selectData}
                    onChange={(e) => setSelectedData(e.target.value)}
                >
                    <option value="">Válasszon szobát</option>
                    {data.map((data) => (
                        <option key={data.szazon} value={data.szazon}>
                            {data.sznev}
                        </option>
                    ))}
                </select>
            </label>
            <h2>Első lekérdezés eredménye:</h2>
      <ul>
        {adatok.map((item) => (
          <li key={item.szazon}>
            {item.szazon} - {item.sznev}
          </li>
        ))}
      </ul>

        </div>
        
    )
}

export default Test;