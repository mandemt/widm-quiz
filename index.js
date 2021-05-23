const express = require('express')
const app = express()
const port = 2001;

app.use(express.urlencoded({
    extended: true
  }))

let ejs = require('ejs');
app.set('view engine', 'ejs')
app.use(express.static('static'))

const teams = [
    {"teamnaam": "Team 1", "teamleden": ["Alfredo", "Tom", "marco borsato"]}
]

app.get('/', (req, res) => {
    res.render('index')
  

})


app.get('/maakteam', (req,res) => {
    res.render('maakteam')
   
})


app.post('/maakteam/teamoverview',(req, res) => {

    const team = {"teamnaam": req.body.teamname, "teamleden": req.body.teammember}
    teams.push(team)
    res.render('teamoverview', {teams})

    

})

app.get('/maakteam/:teamnaam', (req, res) =>{
})
app.listen(port, () =>{
    console.log('luisterend op ${port}')
})