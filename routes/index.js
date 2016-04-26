var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5.1',direccion: __dirname });
});
router.get('/author', function (req,res,next) {
	res.render('author',{nombre : 'Rodrigo Brechard Alarcia', 
		foto : 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/039/09a/1d9adaf.jpg', 
		video : 'https://www.youtube.com/embed/rrkrvAUbU9Y'})
})

module.exports = router;
