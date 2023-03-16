import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import Character from './pages/Character';
import Home from './pages/Home';

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path='character/:characterId'
                    element={<Character />}
                ></Route>
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
