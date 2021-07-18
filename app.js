const express = require('express')
const app = express()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

const upload = multer({ storage })

const PORT = process.env.PORT || 8080

app.set('view engine','ejs');

app.get('/upload', (req, res) => {
  res.render("index")
})

app.get('/', (req, res) => {
  res.json({
    menssagem: 'BEM VINDO'
  })
})

app.post('/upload', upload.single('img'), (req, res) => {
  console.log(req.body, req.file)
  res.json({
    result: req.file
  })
})

app.get('/info', (req, res) => {
  res.json({
    info: "A api esta fumcionando normalmente!"
  })
})

app.get('/dono', (req, res) => {
  res.json({
    whats: 'Wa.me/559184035474'
  })
})

app.listen(PORT, () => {
console.log('okok ' + PORT)
})