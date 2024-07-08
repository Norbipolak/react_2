/*
Itt meg az van, hogy tud fogadni ez is prop-okat, amiket majd meg kell neki adni meghívásnál 

Meg ezeket a prop-okat meg kell adni valahol, hogy hol jelenjen meg 
pl. itt ez a függvény vár egy color-t meg egy marginLeft-et és ezt majd style-val meg fogja kapni a h1-es tag!!!!! 

fontos, hogy ezeket a props-okat majd egy {} be kell írni és, hogy minden props-ot ki kell majd tölteni meghívásnál vagy ha nem 
akkor meg itt bele kell égetni amikor megadjuk prop-ként!!!!! 

style={{color:color, marginLeft:marginLeft}}

és meghívásnál
-> 
<MyComponent color: "red" marginLeft: "20px"/>
*/ 

function MyComponent({color, marginLeft}) {
    return(
        <div>
            <h1 style={{color:color, marginLeft:marginLeft}}></h1>
            <h2>sdfdsf</h2>
        </div>
    );
}

/*
import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent({ color, marginLeft }) {
    return (
        <div>
            <h1 style={{ color: color, marginLeft: marginLeft }}>Styled Heading</h1>
            <h2>Some text</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            <MyComponent color="red" marginLeft="20px" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

*/