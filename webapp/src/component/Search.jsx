import React from "react";
import './FindTask.css'
import { Button} from 'semantic-ui-react'
class Search extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			DataisLoaded: false,
            isItemContentVisible: {}
		};
        
	}
    showContent(id) {
        
        this.setState({
          isItemContentVisible: {     
            ...this.state.isItemContentVisible,
            [id]: true
          }
        });
      }

      deleteTask(id){
        
        fetch("http://localhost:8000/deletetask/"+id)
		.then((res) => res.json())
			.then(() => {
				fetch("http://localhost:8000/gettask/")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        tasks: json,
                        DataisLoaded: true
                    });
                })
			})	
    }
	componentDidMount() {
		fetch("http://localhost:8000/gettask/")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					tasks: json,
					DataisLoaded: true
				});
			})
	}



	render() {
		const { DataisLoaded, tasks } = this.state;

		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div>
		     {
				tasks.map((task,i) => (
				
                    <ol className="card" >
            
                    <div className="container" key = { task._id.toString()} onClick={() => this.showContent(task._id.toString())}> 
                    <br/>
                        <div className="row">
                            <div className="colLeft">
                            Type
                            </div>
                            <div className="colRight">
                            { task.Type}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="colLeft">
                            Title
                            </div>
                            <div className="colRight">
                            {task.Title}
                            </div>
                        </div>
                        <div className="row">
                            <div className="colLeft">
                            Description
                            </div>
                            <div className="colRight">
                            {task.Description}
                            </div>
                        </div>
                        <div className="row">
                            <div className="colLeft">
                            Suburb
                            </div>
                            <div className="colRight">
                            {task.Suburb}
                            </div>
                        </div>
                        <div className="row">
                            <div className="colLeft">
                            Date
                            </div>
                            <div className="colRight">
                            {task.Date}
                            </div>
                        </div>
                    
                        {this.state.isItemContentVisible[task._id.toString()]? (
                        <div>
                        <div className="row">
                            <div className="colLeft">
                            Image
                            </div>
                            <div className="colRight">
                            
                            <img style={ {height:"auto",width:"100%"}} src={task.Image} alt=""></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="colLeft">
                            Budget Type
                            </div>
                            <div className="colRight">
                            {task.BudgetType}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="colLeft">
                            BudgetAmount
                            </div>
                            <div className="colRight">
                            {task.BudgetAmount}
                            </div>
                        </div> 
                        </div>
                            ) : null}
                        
                        
                        
                        
                        <br/>   
                    </div>
                    
                    <Button  color='black' style={{width:'150px',height:'50px',marginLeft:'5%'}}  
                    onClick={()=>this.deleteTask(task._id.toString())}>Delete Task</Button><br/><br/>
                    </ol>
                    
              
              
               ))} 
               
               
            </div>  
				)}
		
	
}


export default Search;
