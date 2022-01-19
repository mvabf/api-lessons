import express from 'express';
import routes from './routes';
import './database/db';

const app = express();
app.use(express.json());
app.use(routes);

export default app;

app.listen(3000, () => {
    console.log('backend started!');
});