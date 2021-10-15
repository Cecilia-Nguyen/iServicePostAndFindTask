import React from 'react'
import Logo from './Logo'
import './Logo.css'
import List from './List'



const LogoList = () => {
  return <div className="row">
    <h1>Featured Experts</h1>
    <br></br>
    {List.map((props) =>

      <Logo
        key={props.key}
        logo={props.logo}
        name={props.name}
        description={props.description}
        iconName={props.iconName}
        rating={props.rating}

      />
    )}

  </div>
}

export default LogoList


