import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error.toString());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    {/* Отображение ответа от сервера */}
                    {error && <p>Error: {error}</p>} 
                    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                </div>
            </header>
        </div>
    );
}

export default App;
