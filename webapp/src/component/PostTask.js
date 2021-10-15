import React,{useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import TaskType from './TaskType'
import InPerson from './InPerson.jsx'
import Describe from './Describe'
import Budget from './Budget'
import SubmitButton from './SubmitButton'
import Online from './Online'
import Navigation from './Navigation'

function PostTask() {
  const [render, settingUpTask] =useState(<InPerson changeSuburb ={TaskSuburb} changeDate = {TaskDate}/>)
  const [Type, setType] = useState('InPerson')
  const [Title, setTitle] =useState("")
  const [Description, setDescription] = useState("")
  const [Image, setImage ] = useState("https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif")
  const [Suburb, setSuburb] = useState("")
  const [Date, setDate] = useState("")
  const [BudgetType, setBudgetType] = useState("Total")
  const [BudgetAmount, setBudget]= useState("")
  
  
  function Submit(){

    fetch('http://localhost:8000/posttask', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({
        Type: Type,
        Title: Title,
        Description: Description,
        Image: Image,
        Suburb: Suburb,
        Date: Date,
        BudgetType: BudgetType,
        BudgetAmount: BudgetAmount
        
      })
      })
      .then(response => {
        response.json()})
      .then(data => console.log(data))
      .catch(err => {
      console.log("Error:" + err)
    })
  }
  return (
    <div  >
      <Navigation/>
      <TaskType
      changeInPerson={TaskInPerson} 
      checkInPerson = {Type ==="InPerson"}
      changeOnline={TaskOnline}
      checkOnline = {Type ==="Online"}
      
      ></TaskType>
      
      <Describe
      changeTitleTask ={TaskTitle}
      changeDescriptionTask = {TaskDescription}
      changeImageTask = {TaskImage}
      ></Describe>
      
      <div><img style={{marginLeft:"13%",height:"auto",width:"290px",marginBottom:"1%"}} src={Image} alt=""/></div>
      <div>{render}</div>
      
      <Budget
      changeTotal ={BudgetTypeChoice}
      checkTotal = {BudgetType === "Total"}
      changeHourlyRate ={BudgetTypeChoice}
      checkHourlyRate = {BudgetType === "Hourly Rate"}
      changeBudget ={Number}></Budget>
      <SubmitButton Submit={Submit} />

    </div>
  );
  
  function TaskOnline(){
    settingUpTask(<Online changeSuburb ={setSuburb("")} changeDate = {TaskDate}/>)
    setType("Online")
    }
   function TaskInPerson(){
    settingUpTask(<InPerson 
      changeSuburb ={TaskSuburb} changeDate = {TaskDate}/>)
    setType("InPerson")
    } 
    function TaskTitle(task){
      setTitle(task.target.value)
     
    }
    function TaskDescription(task){
      setDescription(task.target.value)
    }
    
    function TaskSuburb(task){
      setSuburb(task.target.value)
     
    }
    function TaskDate(task){
      setDate(task.target.value)
    }
    
    
    function TaskImage(task) {
      
      let files = task.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
       
        fileReader.onload = (event) => {
           setImage(event.target.result)
        }
  
    }
   
    
    function BudgetTypeChoice(task){
      setBudgetType(task.target.value)
    }
    
    function Number(task){
      setBudget(task.target.value)
    }
    
    
}

export default PostTask;
