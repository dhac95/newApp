var db = require('../dbconnections'); //reference of dbconnection.js  
var Task = {  
    getAllTasks: function(callback) {  
        return db.query("Select * from user_tasks limit 500", callback);  
    },  
    getTaskById: function(id, callback) {  
        return db.query("select * from user_tasks where task_id=?", [id], callback);  
    },  
    addTask: function(Task, callback) {  
        return db.query("INSERT INTO user_tasks(user_id,team_id,build,tasks_id,sub_task_id,task_desc,count,noofdevice,time,date,on_time,cmds,create_date,maintain_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [Task.user_id,Task.team_id,Task.build,Task.tasks_id,Task.sub_task_id,Task.task_desc,Task.count,Task.noofdevice,Task.time,Task.date,Task.on_time,Task.cmds,Task.create_date,Task.maintain_date], callback);  
    },  
    deleteTask: function(id, callback) {  
        return db.query("delete from user_tasks where task_id=?", [id], callback);  
    },  
    updateTask: function(id, Task, callback) {  
        return db.query("update user_tasks set ?  where task_id= ?", [Task , id], callback);  
    }  
};  
module.exports = Task;  