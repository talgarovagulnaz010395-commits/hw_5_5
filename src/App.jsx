import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import FilteredList from "./components/FilteredList.jsx";

function App() {
    return (
        <div className="container" style={{ padding: 20 }}>
            <h2>Задание №1</h2>
            <Counter />
            <h2 style={ {margin:"20px"}}>Задание №2</h2>
            <FilteredList/>
        </div>
    );
}

export default App;