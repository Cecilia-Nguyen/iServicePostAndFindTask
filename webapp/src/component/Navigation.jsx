import React from 'react'
import './Navigation.css'
import { Menu, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
  



function Navigation(props) {
    return (

        <Menu borderless   className='menu'>
            <Menu.Menu >
            
            <Link className='item' to="/">IService</Link>
            <Link className='item' to="/PostTask"> Post a Task</Link>
            <Link className='item' to="/#"> Become an expert</Link>
            <Link className='item' to="/FindTask"> Find tasks</Link>
            <Link className='item' to="/#"> How it works</Link>
                

                <Menu.Item >
                <Button className='cssButton' color='green'>Sign In</Button>

                </Menu.Item>


            </Menu.Menu>
        </Menu>
    )
}
export default Navigation