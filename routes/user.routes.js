const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  console.log(req.user);
  res.render('logged', {avatar: req.user.photos[0].value, name: req.user.displayName});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if(req.user) res.render('profile');
  else res.redirect('/user/no-permission');
});

router.get('/profile/settings', (req, res) => {
  if(req.user) res.render('settings');
  else res.redirect('/user/no-permission');
});


module.exports = router;