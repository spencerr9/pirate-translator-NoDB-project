const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use() --> middleware that runs for EVERY request
app.use(bodyParser.json());

// ====== END POINTS ======

//app.get('/api/users, (req, res) => {})

// ====== END POINTS ======
const port = 3005;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});