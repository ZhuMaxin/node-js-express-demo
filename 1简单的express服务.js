const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('express')
})

app.listen(9874,()=>{
  console.log('http://localhost:9874');
})