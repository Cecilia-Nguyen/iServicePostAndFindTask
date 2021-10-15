import React from 'react'
import {Menu} from 'semantic-ui-react'
import './Describe.css';

function Describe (props)
{
        return (
            <div >
            <Menu borderless inverted color='green' > 
            <Menu.Item  style={{marginLeft:'0'}} >Describe your Task to Experts</Menu.Item >  
            </Menu>
            <label class='name'>Title</label>
            <input type="text"  class='title'  onChange={props.changeTitleTask} /> <br></br>
            <label class='name' >Description</label>
            <input type="text" class='description' onChange={props.changeDescriptionTask} /><br></br>
            <label class='name' >Add Your Image</label>
            <input type="file" style={{marginLeft:"5%",marginBottom:"20px"}} onChange={props.changeImageTask} accept=".jpeg, .png, .jpg"/><br></br>
            
            
            </div>




        )
}

export default Describe

