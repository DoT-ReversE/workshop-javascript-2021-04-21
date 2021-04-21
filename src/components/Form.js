import React, { useState } from 'react';

function Form( {onSayHi} ) {
    const [name, setName] = useState("");

    function doKey(event) {
        setName(event.target.value);
    }

    function sayHi() {
        console.log("Click say hi");
        onSayHi(name);
    }

    return (
        <div>
            <input type="text" onKeyUp={doKey}/>
            <button onClick={sayHi}>Say Hi</button>
            <p>Name : {name}</p>
        </div>
    );
}

export default Form;