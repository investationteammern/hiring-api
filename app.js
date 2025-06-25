import express from 'express';
//import cookieParser from "cookie-parser";
import cors from 'cors';
import { dbConnection } from './src/config/db.js';
import JobRoutes from './src/routes/jobCategory.js';


const app = express();

app.use(express.json());
const allowedOrigins = [
    'http://localhost:5173',
    'https://hiring-web-blush.vercel.app',
]

// ✅ Use CORS with dynamic origin checking
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true)
        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        } else {
            return callback(new Error('Not allowed by CORS'))
        }
    },
    // credentials: true, // If using cookies or sessions
}))


app.use('/v1/api', JobRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
    dbConnection();
})