import React from 'react';
import './Maincontent.css'
const Maincontent = ({NamePage , designer}) => {
    return (
        <div>
            <main>
    {NamePage} pages
    <br/>
    designed by {designer}
    </main>
        </div>
    );
}

export default Maincontent;
