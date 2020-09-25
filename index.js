const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






const cors = require('cors')
app.use(cors());

app.use((require('./src/routes/users')))


app.listen(3000, () => {
    console.log('server in port 3000')

});




