import { useState } from "react";

function ClickCounter() {
    /*
    UseState hook 
    A useState-vel létrehozott változók 
    módusálását figyeli a React interpreter
    és frissíti a komponenst, ha azok módosulnak 

    topble -> meghatározott típusokkal rendelkező elemek egy tömbben 

    1. elem -> változó 
    2. elem -> a változó settere (az a függvény, amivel be tudjuk állítani a változó értékét)
    -> 
    [clicks, setClicks] 
    */

    let [clicks, setClicks] = useState(0);

    const btnClick = ()=> {
        setClicks(c=>c+1);
    };

    return(
        <div>
            <h1>{clicks}</h1>
            <button onClick={btnClick}>Klikkelj!</button>
        </div>
    );
}

export default ClickCounter;