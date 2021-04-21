import React, { useState } from 'react';

function Form( {onSayHi} ) {
    const [name, setName] = useState("");

    function doKey(event) {
        setName(event.target.value);
    }

    function doClick() {
        console.log("Click say hi");
        onSayHi(name);
    }

    return (
        <div>
            <input type="text" onKeyUp={doKey}/>
            <button onClick={doClick}>Say Hi</button>
            <p>Name : {name}</p>
        </div>
    );
}

export default Form;