import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { OptionalBossList } from "./OptionalBossList";
import { CardList } from './CardList'

const App = () => {
    return (
        <div id="app" className="p-0 m-0">
            <BrowserRouter>
                <header><h1>Zodiac Companion</h1></header>
                <Routes>
                    <Route path="/" element={<OptionalBossList />} />
                    <Route path="/all" element={<CardList />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />)

// super simple DB to store only id & user info?
