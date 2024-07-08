import { useState } from "react";

function CurrencyExchange() {
    const [currencies, setCurrencies] = useState({
        "EUR":380, 
        "USD":370
    })

    const [exchangeRate, setExchangeRate] = useState(0);
    const [amount, setAmount] = useState(0);

    return(
        <div>
            <select onChange={(e)=>setExchangeRate(parseInt(e.target.value))}>
            <option value={0}>Válassz valutát!</option>
            {
                Object.entries(currencies).map((o, i)=> 
                    <option key={i} value={o[1]}>{o[0]}</option>
                )
            }
            </select>

            <label>Összeg: </label>
            <input onChange={(e)=>setAmount(parseInt(e.target.value))}
            type="number" value={isNaN(amount) ? amount : 0}/>

            <h3>
                Result: {!isNaN(exchangeRate * amount) ? exchangeRate * amount : "Nem megfelelő az érték"}
            </h3>
        </div>
    );
}

export default CurrencyExchange;

/*
Kell egy currencies, egy olyan gyüjtő, amiben el vannak tárolva az adatok, amiken majd végig akarunk menni egy map-vel, de mivel ez nem egy tömb 
hanem egy objektum, ezért itt ilyen formában kell -> Object.entries(curriencies) és akkor ez visszaad nekünk egy tömbböt tömbökkel, amikben benne
vannak az értékpárok!!! 
ezért fontos
->
Object.entries(currencies).map((o, i)=> 
    <option key={i} value={o[1]}>{o[0]}</option>
)
hogy itt a value majd a o[1], mert az az érték 370 meg 380!!! és amit meg fogunk jeleníteni az meg a o[0], tehát a az USD vagy az EUR

<select onChange={(e)=>setExchangeRate(parseInt(e.target.value))}>
Itt meg a select-re kell az onChange, meg hasonló esetekben is a select-re kell egy onChange, mert úgy tudjuk majd meg, hogy változót-e a 
az option és ennek az értékét pedig le kell menteni egy változóba!!!  
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és akkor ez a változó annak mindig az lesz az értéke, mint az option-nek ami meg van adva, annak a value-jával!!!! 
és fontos, hogy parseInt-elni is kell, hogy egy integer legyen ha még nem az 

ugy még fontos, hogy úgy tudunk megszerezni egy értéket, hogy e.target.value!!!! 

<label>Összeg: </label>
<input onChange={(e)=>setAmount(parseInt(e.target.value))}
type="number" value={isNaN(amount) ? amount : 0}/>

itt is van egy onChange arra amit beírtunk ebbe az input-ba és megszerezzük az értéket és lementjük egy változóba!!! 
meg azt is megvizsgáljuk, hogy ami be lett írva az tényleg egy number-e, ezt a isNaN függvény segítségével tudjuk megvizsgálni!!! 

És akkor már van két value-nk két változóban elmentve 
1. ha kiválasztunk valamelyik option-t, ott meg van adva egy érték ami a currencies-ből jön és a select-vel ezt onChange-vel lementjük 
annak az értékét, ami éppen ki van választva 
2. ezt meg megszerezzük az input-ból, amit beleírt ide a felhasználó, ugyanúgy az onChange-re reagál és mindig frissíti az értékét, attól 
függően, hogy épp mint írt be a felhasználó!!!! 

és akkor ezt a két dolgot meg itt összeszorozzuk 
-> 
<h3>
    Result: {!isNaN(exchangeRate * amount) ? exchangeRate * amount : "Nem megfelelő az érték"}
</h3>

Ez is csak akkor megy végbe, ha isNaN az tagadva van, tehát itt ennek a kettőnek az értéke egy number, akkor kiírjuk, ha viszont isNaN az true 
lesz, tehát not a number-ről van szó, akkor meg kiírunk egy hibaüzenetet!!!! 

*/