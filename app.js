import express from 'express';
//import cookieParser from "cookie-parser";
import cors from 'cors';
import { dbConnection } from './src/config/db.js';
import JobRoutes from './src/routes/jobCategory.js';


const app = express();

app.use(express.json());
app.use(cors());



app.use('/v1/api', JobRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
    dbConnection();
})