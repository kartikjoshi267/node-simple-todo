const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.set('views', './views')

let itemsArr = [];
app.get('/', (req, res) => {
    res.render('index', items=itemsArr);
});

app.post('/form', (req, res) => {
    if (req.body.item !== ""){
        itemsArr.push(req.body.item);
    }
    res.redirect('/');
})

app.listen(8000);