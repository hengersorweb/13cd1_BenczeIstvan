import { Route, Routes } from 'react-router-dom'
import './css/App.css';
import Foglaltsag from "./oldalak/Foglaltsag"
import Home from "./oldalak/Home"
import Menu from "./oldalak/Menu"
import TablazatSzoba from './oldalak/TablazatSzoba';

function App() {

    return (
        <>
            <div className='App'>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/foglaltsag" element={<Foglaltsag />} />
                    <Route path="/szobafoglaltsaga" element={<TablazatSzoba />} />
                </Routes>
            </div>

        </>
    )
}

export default App
