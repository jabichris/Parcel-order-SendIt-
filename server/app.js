// importing our dependencies
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", routes);
app.listen(port, () => {
  console.log("App listening on port 3000");
});

export default app;
