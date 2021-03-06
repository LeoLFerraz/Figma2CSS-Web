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

router.get('/image', function(req, res){
  axios.get('https://api.figma.com/v1/images/'+req.query.key+'?ids='+req.query.ids, {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

router.get('/node', function(req, res){
  axios.get('https://api.figma.com/v1/files/'+req.query.key+'/nodes?ids='+req.query.ids, {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

router.get('/style', function(req, res){
  axios.get('https://api.figma.com/v1/styles/'+req.query.key, {headers: {"X-Figma-Token":req.query.token}})
    .then(value =>{
      res.status(200).send(value.data)
    }).catch(err => res.send(err))
});

module.exports = router;

