import React from 'react'
import './Describe.css';
import {Menu} from 'semantic-ui-react'

function InPerson (props)
{
        return (
            <div>    
            <Menu borderless inverted color='green' >  
            <Menu.Item style={{marginLeft:'0'}}>Setting up your task</Menu.Item >  
            </Menu>
            <div style={{marginTop:"1%"}}>
            <label class='name'>Suburb</label>
            <input type="text"  style={{marginLeft:"9%"}} class='title'  onChange={props.changeSuburb}/> <br></br>
            <label class='name'>Date</label>
            <input type="text"  class='title'  onChange={props.changeDate} /> <br></br>
            </div>
           </div>
            
              
        )
}

export default InPerson;




