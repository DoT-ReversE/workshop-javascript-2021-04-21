import React, { useState, useEffect } from 'react';

function Form() {
    const [data, setData] = useState("");

    return (
        <div>
            <input type="text"/>
            <p>Hello : {data}</p>
        </div>
    );
}

export default Form;