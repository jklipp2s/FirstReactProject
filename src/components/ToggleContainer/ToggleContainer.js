import React, { useState } from 'react';

import './ToggleContainer.css'

function ToggleContainer() {

    let [classname, setClass] = useState('red');

    



    return(


        <div className={classname}>


        <button onClick={() => setClass(classname === "red" ? "green" : "red")}>Click me! ({classname})</button>


        </div>



        );


}




export default ToggleContainer;