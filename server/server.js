const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.status(200);
    response.send('hello express');
    response.end();
});

app.get('/test', (request, response) => {
    response.json({
        result: 1,
        message: 'hello'
    });
})
app.listen(port, () => console.log(`You are listening at port:${port}...`));