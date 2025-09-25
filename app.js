import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
const app = express();

// mở port 3000
const port = 3000;

// mogan

app.use(morgan("combined"));

// route
//đăng ký template engine cho Express, để khi render file .handlebars, Express sẽ biết cách xử lý nó.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//Nói với Express rằng view engine mặc định sẽ là handlebars.
//Khi gọi res.render('home'), Express sẽ tự tìm file home.handlebars trong thư mục views.
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);