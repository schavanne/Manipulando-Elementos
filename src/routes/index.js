var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});
router.get('/movieList', function(req, res, next) {
  res.render('movieList', { title: 'Digital Movies' });
});
router.get('/movieAdd', function(req, res, next) {
  res.render('movieAdd', { title: 'Digital Movies' });
});
router.get('/movieDetail', function(req, res, next) {
  res.render('movieDetail', { title: 'Digital Movies' });
});
router.get('/movieEdit', function(req, res, next) {
  res.render('movieEdit', { title: 'Digital Movies' });
});

module.exports = router;
