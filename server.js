import express from 'express'
const app = express()
app.get('/nuevo', (req, res) => {
  res.end('Hellow Word')
})

app.listen(3000)
console.log('====================================');
console.log('Server on port 3000');
console.log('====================================');