import React from 'react';
var x = new Date();
var n = x.getFullYear();
function Footer(){
    return(
        <div className="foot">
            <footer>
                <p>copyright @{n}</p>
            </footer>
        </div>
    )
}
export default Footer;