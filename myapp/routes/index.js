var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var items = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render('index', { title: 'My App', items: items });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/images/:nombre', function(req, res, next) {
  const nombreImagen = req.params.nombre;
  res.sendFile(path.join(__dirname, '..', 'public', 'images', nombreImagen));
});

module.exports = router;
