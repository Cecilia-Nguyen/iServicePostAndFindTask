import React,{useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './FindTask.css'

function Search (props)
 { 
    
    const [tasks,setTasks]=useState() 
    
    useEffect(()=>{ 
    var request = new XMLHttpRequest(); 
   
   
    request.onreadystatechange = function() { 
    if (request.readyState === 4 && request.status === 200) { 
    const response=JSON.parse(request.response) 
    setTasks(response) 
    } 
    }; 
    request.open('GET', 'http://localhost:8000/gettask', true); 
    request.send(); 
    },[]) 
    
    useEffect(()=>{ 
    console.log(tasks) 
    },[tasks]);

    

    return ( 
        
    <div> 

       

        {tasks && tasks.map(tasks=>
        
        <div className="card" >
            
            <div className="container"> 
            <br/>
                <div className="row">
                    <div className="colLeft">
                    Type
                    </div>
                    <div className="colRight">
                    {tasks.Type}
                    </div>
                </div>
                
                <div className="row">
                    <div className="colLeft">
                    Title
                    </div>
                    <div className="colRight">
                    {tasks.Title}
                    </div>
                </div>
                <div className="row">
                    <div className="colLeft">
                    Description
                    </div>
                    <div className="colRight">
                    {tasks.Description}
                    </div>
                </div>
                <div className="row">
                    <div className="colLeft">
                    Suburb
                    </div>
                    <div className="colRight">
                    {tasks.Suburb}
                    </div>
                </div>
                <div className="row">
                    <div className="colLeft">
                    Date
                    </div>
                    <div className="colRight">
                    {tasks.Date}
                    </div>
                </div>
            

                <div className="row">
                    <div className="colLeft">
                    Image
                    </div>
                    <div className="colRight">
                    
                    <img style={ {height:"auto",width:"100%"}} src={tasks.Image} alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="colLeft">
                    Budget Type
                    </div>
                    <div className="colRight">
                    {tasks.BudgetType}
                    </div>
                </div>
                <div className="row">
                    <div className="colLeft">
                    BudgetAmount
                    </div>
                    <div className="colRight">
                    {tasks.BudgetAmount}
                    </div>
                </div>
                
                <br/>

            </div>
            </div>
            
      
      
       )} 
       
       
    </div>  
    ); 
    
    
}
export default Search