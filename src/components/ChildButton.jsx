import React, { memo } from "react";
import { Button } from "antd";

const ChildButton = React.memo(function ChildButton({ onClick, label }) {
    console.log("ChildButton render");
    return (
        <Button onClick={onClick} type="default">
            {label}
        </Button>
    );
})

export default ChildButton;