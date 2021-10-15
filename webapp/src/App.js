import React from 'react'; 
import Home from './component/Home';
import PostTask from './component/PostTask';
import FindTask from './component/FindTask';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return (
       

        
        <BrowserRouter>
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/PostTask" component={PostTask} />
                <Route path="/FindTask" component={FindTask} />
            </Switch>
        </main>
        </BrowserRouter> 
    
    )
}
export default App;