const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', isAuthorized, (req,res) => {
  res.json([{
    id: 1,
    name: 'Meritxell'
  }])
 })

 app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "poma",
  },
  {
    id: 2,
    name: "pera",
  },
  ,
  {
    id: 3,
    name: "platan",
  },
 ];

 res.json(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'contrasenya') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}