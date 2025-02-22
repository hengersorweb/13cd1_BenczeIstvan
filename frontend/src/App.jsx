import { Route, Routes } from 'react-router-dom'
import './css/App.css';
import Foglaltsag from "./oldalak/Foglaltsag"
import Home from "./oldalak/Home"
import Menu from "./oldalak/Menu"
import TablazatSzoba from './oldalak/TablazatSzoba';
import Test from './oldalak/Test';


function App() {

    return (
        <>
            <div className='App'>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/szobak" element={<Foglaltsag />} />
                    <Route path="/foglaltsag" element={<TablazatSzoba />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>

        </>
    )
}

export default App
