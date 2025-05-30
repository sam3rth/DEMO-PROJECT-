// const express = require('express');
// const path = require('path');
//  const app= express();

//   app.set('view engine', 'ejs');
//   app.set('views', path.join(__dirname,'views'));
//    app.get('/',(req,res)=> {
//      res.render('index', { message: 'Hello fromm EJS!'});
//    });
//    app.listen(3000,()=> {
// console.log(`Server running on http://localhost:3000);
//    });
const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Example route
app.get('/', (req, res) => {
  res.render('index', { title: 'EJS APP', message : 'Hello'});
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});