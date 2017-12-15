var db = require('../dbconnections'); //reference of dbconnection.js  
var Team = {  
    getAllTeams: function(callback) {  
        return db.query("Select * from amz_teams limit 500", callback);  
    },  
    getTeamById: function(id, callback) {  
        return db.query("select * from amz_teams where team_id=?", [id], callback);  
    },  
    addTeam: function(Team, callback) {  
        return db.query("INSERT INTO amz_teams(team_name,added_by,status,team_deletion,create_date,maintain_date) VALUES(?,?,?,?,?,?)", [Team.team_name,Team.added_by,Team.status,Team.team_deletion,Team.create_date,Team.maintain_date], callback);  
    },  
    deleteTeam: function(id, callback) {  
        return db.query("delete from amz_teams where team_id=?", [id], callback);  
    },  
    updateTeam: function(id, Team, callback) {  
        return db.query("update amz_teams set ?  where team_id= ?", [Team , id], callback);  
    }  
};  
module.exports = Team;  