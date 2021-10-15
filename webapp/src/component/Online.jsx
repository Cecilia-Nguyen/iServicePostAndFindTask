import React from 'react'
import './Describe.css';
import {Menu} from 'semantic-ui-react'


function Online  (props)
{

        return (
            <div>
            <Menu borderless inverted color='green' >  
            <Menu.Item style={{marginLeft:'0'}}>Setting up your task</Menu.Item >  
            </Menu>
            
            <div style={{marginTop:"1%"}}>
            <label class='name'>Date</label>
            <input type="text"  class='title'  onChange={props.changeDate} /> <br></br>
            </div>
            </div>
        )
}

export default Online
