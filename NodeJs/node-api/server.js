const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello to adaao');
});

app.listen(3001);
