import React, { useState, useEffect } from "react";

function Clock() {
    return (
        <div>
            <h2>00:00</h2>
            <button>start</button>
            <button>{1 ? "Pause" : "Resume"}</button>
        </div>)

}

export default Clock;