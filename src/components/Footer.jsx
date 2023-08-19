import React from 'react'

function Footer()
{
    const y=new Date().getFullYear();
    return (
    <footer>
        <p>CopyRight © {y}</p>
    </footer>
    );
}


export default Footer;