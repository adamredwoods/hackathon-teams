var express = require('express');
var fs = require('fs');
//var bodyParser = require('body-parser');
var teamService = require('../models/teamService');
var router = express.Router();


router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams, showDelete: false, showUpdate: false });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new',  {showDelete: false, showUpdate: false});
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team, showDelete: true, showUpdate: true });
});

router.put("/:name", function(req,res) {
   console.log("PUT route. ID=",req.params.name," ",req.body.newName," ",req.body.newMembers);
   teamService.editTeam(req.params.name,req.body);
   res.send("Success");
});

router.delete("/:name", function(req,res) {
   //console.log("delete route. ID=",req.params.name);
   teamService.deleteTeam(req.params.name);
   res.send("Success");
});



module.exports = router;
