import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => { 
            setDate(new Date()) 
        }, 500);
        
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <p>Current Date = {date.toLocaleString()}</p>
    );
}

export default Clock;