import './App.css';
import Menu from './components/Menu.jsx';
import GridView from './components/GridView.jsx';
import TileView from './components/TileView.jsx';
import { useState } from 'react';

function App() {
    const [view, setView] = useState('tile');

    return (
        <div className='App'>
            <Menu />
            <div className='body mt-20'>
                <div className='shadow-lg'>
                    <button
                        onClick={() => {
                            setView('tile');
                        }}
                    >
                        Tile
                    </button>
                    <button
                        onClick={() => {
                            setView('grid');
                        }}
                    >
                        Grid
                    </button>
                </div>
                {view === 'grid' && <GridView />}
                {view === 'tile' && <TileView />}
            </div>
        </div>
    );
}

export default App;
