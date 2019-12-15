let express = require('./myexpress');
let app = express();
app.get('/name', function(req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('name 我的名字');
});
app.use('/name', function(req, res, next) {
    console.log('///');
    next('111');
});
app.post('/age', function(req, res) {
    res.end('age');
});
app.use(function(err, req, res, next) {
    console.log('/error/');
});
app.listen(3000, function() {
    console.log('server start 3000');
});