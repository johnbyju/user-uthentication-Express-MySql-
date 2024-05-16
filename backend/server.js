import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    // Replace 'index.html' with the path to your HTML file
    res.send(Date())
  });
const port =process.env.port || 1412
 // assign port through the env formot incase any error followed it will go with the second one


app.listen(port ,()=>{
    console.log(`port is running on ${port}`);
})