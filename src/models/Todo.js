import { DataTypes } from 'sequelize';
import { connection } from '../database/index.js';

const Todo = connection.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: connection
})

export default Todo;