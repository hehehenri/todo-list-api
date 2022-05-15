import { Sequelize } from 'sequelize';
import config from '../config/database.js';
import Todo from '../models/Todo.js';

export const connection = new Sequelize(config);

