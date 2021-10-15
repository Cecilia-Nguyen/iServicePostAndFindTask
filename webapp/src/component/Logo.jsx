import React from 'react'
import {Icon} from 'semantic-ui-react'
import './Logo.css'

const Logo = (item) =>
{
    return <div className='column'>
    <img src={item.logo}  width = {"100%"} alt=""/>
    <h3>{item.name}</h3>
    <h5>{item.description}</h5>
    <p> <Icon link name={item.iconName} size='30px' style={{color: '#058095'}}/>{item.rating}</p>
    <br></br>
    </div>
}

export default Logo



