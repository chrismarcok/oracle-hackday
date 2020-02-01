import * as express from 'express';
import apiRouter from './routes';
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(apiRouter);



app.get("/root", (req, res) => {
  res.send("Express root route");
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
