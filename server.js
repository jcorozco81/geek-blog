const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Esto es un secreto',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);


//START SERVER
const port = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App running on port ${port}...`));
});