import 'dotenv/config';
import Express, { json } from 'express';
import cors from 'cors';

const app = Express();

app.use(json());
app.use(cors());

export default app;
