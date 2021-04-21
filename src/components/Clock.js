import { useState, useEffect } from 'react';

function Clock( {title} ) {
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
        <p>{title}{date.toLocaleString()}</p>
    );
}

export default Clock;