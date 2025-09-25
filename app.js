// dùng thư viện express js

const express = require('express')
const app = express()
// mở port 3000
const port = 3000;

// route
app.get('/',  (req, res) => {
  return res.send('Hello World')
})

app.listen(port, ()=> {console.log(`Listen ${port}`)})