import express from 'express';
import UserController from './controllers/UserController';

const app = express();

app.get('/', UserController.findAll());

app.listen(3000, () => console.log('Server is listening'));
