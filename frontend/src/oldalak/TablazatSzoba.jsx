import { useState, useEffect } from "react";
import axios from "axios";
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

function TablazatSzoba({ selectedRoom }) {
    const [data, setData] = useState(null); //  Kezdetben null, hogy az első betöltésnél is látszódjon az üzenet
    const [loading, setLoading] = useState(false);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("hu-HU", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      };
    
      

    useEffect(() => {
        if (!selectedRoom) {
            setData(null); //  Ha nincs kiválasztott szoba, biztosan megjelenik az alapértelmezett üzenet
            return;
        }

        setLoading(true); // Betöltési állapot aktiválása
       

        axios.get(`http://localhost:3001/foglaltsag/${selectedRoom}`)
            .then(response => {
                
                setData(response.data.length > 0 ? response.data : []); //  Ha nincs adat, akkor üres tömböt állítunk be
            })
            .catch(error => console.error("Hiba:", error))
            .finally(() => setLoading(false)); // Betöltés vége

    }, [selectedRoom]); // A useEffect minden selectedRoom változásnál lefut

    return (
        <div>
            <h2 className="text-center my-4">Szoba foglaltsága</h2>

            {/* Oldal betöltésekor alapértelmezett üzenet jelenjen meg */}
            {data === null ? (
                <p className="text-center text-muted">Válassz egy szobát a foglaltság megtekintéséhez.</p>
            ) : loading ? (
                <p className="text-center">Adatok betöltése...</p>
            ) : data.length === 0 ? (
                <p className="text-center text-warning">Nincs foglalás erre a szobára.</p>
            ) : (
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
            )}
        </div>
    );
}

export default TablazatSzoba;
