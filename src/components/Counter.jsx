import React, { useState, useCallback } from "react";
import { Button } from "antd";
import ChildButton from "./ChildButton.jsx";

function Counter() {
    const [count, setCount] = useState(0);
    console.log("Counter render");
    const handleClick = useCallback(() => {
        console.log("Child button clicked");
    }, []);
    return (
        <div style={{ marginTop: 20 }}>
            <h3>Счётчик: {count}</h3>
            <Button type="primary" onClick={() => setCount(prev => prev + 1)}>Увеличить</Button>
            <ChildButton onClick={handleClick} label="Кнопка ребёнка" />
        </div>
    );
}

export default Counter;