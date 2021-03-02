import express from 'express';
import cors from 'cors';
import routes from './routes/route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(201).json({ msg: 'success' });
});

export default app;
