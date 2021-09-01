//

import React from 'react'
import ReactDOM from 'react-dom';


export default function Image() {

    let colors = [];
    for (let i = 8; i < 257; i = i + 8) {
        for (let j = 8; j < 257; j = j + 8) {
            for (let k = 8; k < 257; k = k + 8) {
                colors.push(<div style={{padding: '1px', background: `rgb(${i},${j},${k})`}}></div>);
            }//k
        }//j
    }//i

    let image = [];

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(256, 1px)'}}>
            {colors}
        </div>
    );
}//

ReactDOM.render(<Image />, document.querySelector('#root'))