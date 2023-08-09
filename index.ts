import express from 'express';
import sequelize from './models';

const app = express();
const port = process.env.PORT || 5000;

sequelize.authenticate().then(async () => {
    await sequelize.sync()
    app.listen(port, () => console.log(`App listening on ${port}`)
    );
})
