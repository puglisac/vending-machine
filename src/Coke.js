import React from 'react';
import {Link} from 'react-router-dom';

const Coke = () =>{
    return (
        <div className="Coke">
            <img src="https://i.ebayimg.com/images/g/x8kAAOSwWBNeWGKq/s-l640.jpg">
            </img>
            <Link to="/">Back</Link>
        </div>
    );
}
export default Coke;