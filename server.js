const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



//START SERVER
const port = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App running on port ${port}...`));
});