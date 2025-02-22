import { Route, Routes } from 'react-router-dom'
import './css/App.css';
import Foglaltsag from "./oldalak/Foglaltsag"
import Home from "./oldalak/Home"
import Menu from "./oldalak/Menu"


function App() {

    return (
        <>
            <div className='App'>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/szobak" element={<Foglaltsag />} />
                    
                    
                </Routes>
            </div>

        </>
    )
}

export default App
