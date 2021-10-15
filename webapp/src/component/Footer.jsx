import React from 'react'
import { Menu, Button, Input, Icon } from 'semantic-ui-react'


function Footer (props)
{
    return (
      <Menu borderless> 
      <Menu.Menu>
    

          <Menu.Item 
          name='NEWSLETTER SIGN'
          style={{ marginRight:'20px',marginLeft:'20px',fontWeight: "bold" }}

          />
          <Input placeholder='Enter your email' style={{ marginRight:'20px',marginLeft:'20px'}} />
          <Button className= "subscribe" color='green'>Subscribe</Button>

          <Menu.Item 
          name='Contact Us'  style={{ marginLeft:'40%',fontWeight: "bold" }}/>
          <Icon link name='facebook' size='huge' />
          <Icon link name='twitter' size='huge'  />
          <Icon link name='instagram'size='huge' />
          
          </Menu.Menu>
    </Menu>

    )
}
export default Footer

