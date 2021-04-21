import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function doKey(event) {
        setName(event.target.value);
    }

    function sayHi() {
        console.log("Click say hi");
        setMessage("Hello " + name + "!!!!");
    }

    return (
        <div>
            <input type="text" onKeyUp={doKey}/>
            <button onClick={sayHi}>Say Hi</button>
            <p>Name : {name}</p>
            <p>{message}</p>
        </div>
    );
}

export default Form;