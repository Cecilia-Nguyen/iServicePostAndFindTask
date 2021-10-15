const Task = require('../model/Task');
module.exports.getTask = function (req, res) {
	
  
  Task.find() 
   .then(result=>{ 
   console.log('result: ',result) 
   res.send(result); 
   }) 
   .catch(err=>{ 
   console.log(err); 
  }) 
  
};

module.exports.postTask = function (req, res) {
  const task = new Task({
		    Type: req.body.Type,
        Title: req.body.Title,
        Description: req.body.Description,
        Image: req.body.Image,
        Suburb: req.body.Suburb,
        Date: req.body.Date,
        BudgetType: req.body.BudgetType,
        BudgetAmount: req.body.BudgetAmount
  })
  task.save().then((res) => {
	  console.log(task)
  })
  .catch((err) => console.log(err));
};

