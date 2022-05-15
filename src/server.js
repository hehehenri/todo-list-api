import express from 'express';
import router from './routes/todos.routes.js';
import { connection } from './database/index.js';

const app = express();

app.use(express.json());

app.use('/todos', router);

app.listen(3000, () => {
	console.log('listening on 3000');
});