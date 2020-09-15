import React from 'react';
import {Link} from 'react-router-dom';

const Chips = () =>{
    return (
        <div className="Chips">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg">
            </img>
            <Link to="/">Back</Link>
        </div>
    );
}
export default Chips;