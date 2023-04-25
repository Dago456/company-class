const express = require('express');
const app= express();
import pj from "../package.json";
import routes from "./routes/routes";
import cors from 'cors'
const morgan = require("morgan")
app.use(morgan("tiny"))
app.use(cors())

app.set('pj',pj)

app.use(express.json())

app.get('/', (req , res) =>{
    res.json({
        name:app.get("pj").name,
        author: app.get("pj").author,
        description:app.get("pj").description,
        version: app.get("pj").version,
        
    });
});

routes(app);

export default app;











