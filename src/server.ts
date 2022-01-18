import express from 'express';
import routes from './routes';
import './database/db';

const app = express();
app.use(routes);

app.listen(3000, () => {
    console.log('backend running on port 3000!');
});