const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/file', function(req, res){
  axios.get('https://api.figma.com/v1/files/'+req.query.key, {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

router.get('/project', function(req, res){
  axios.get('https://api.figma.com/v1/projects/'+req.query.projectId+'/files', {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

router.get('/team', function(req, res){
  axios.get('https://api.figma.com/v1/teams/'+req.query.teamId+'/projects', {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

module.exports = router;
