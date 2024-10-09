import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from '/src/routes/Main/Main.jsx'
function App() {
    return (
        <Routes>
            <Route paths='/' element={<Main />}/>
        </Routes> )
}
export default App
