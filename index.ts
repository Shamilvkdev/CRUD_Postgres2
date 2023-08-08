import express from 'express';
import db from "./models";

const app = express();
const port = process.env.PORT || 5000;

db.sequelize.sync().then(() =>{
    app.listen(port, () => console.log(`App listening on ${port}`)
    );
})