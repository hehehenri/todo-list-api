import Todo from '../models/Todo.js';
import moment from 'moment';

export default {
    async index(request, response) {
        const todos = await Todo.findAll();

        if (!todos.length) {
            return response.status(404).json({
                'error': 'There are no to-dos yet'
            });
        }

        return response.status(200).json(todos);
    },

    async store(request, response) {
        const { title, completedAt } = request.body;

        const todo = await Todo.create({ 
            title,
            completed_at: completedAt 
        });
        
        return response.status(201).json(todo);
    },

    async show(request, response) {
        const { id } = request.params;

        const todo = await Todo.findAll({ where: { id } });

        if (!todo.length) {
            return response.status(404).json({
                'error': 'Todo not found'
            });
        }
        
        return response.status(200).json(todo);
    },

    async update(request, response) {
        const { id } = request.params;

        const todo = await Todo.findAll({ where: { id } });

        if (!todo.length) {
            return response.status(404).json({
                'error': 'Todo not found'
            });
        }

        await Todo.update({
            title: request.body.title,
            completed_at: request.body.completed_at,
        }, { 
            where: { id } 
        });

        return response.status(201).json({ 'message': 'Todo successfully updated' });
    },

    async destroy(request, response) {
        const todoExists = Todo.count({
            where: { id: request.params.id }
        });

        if(!todoExists) {
            return response.status(404).json({
                'error': 'Todo not found'
            });
        }

        await Todo.destroy({ where: { id: request.params.id } });
        
        return response.status(201).json({ 'message': 'Todo successfully deleted' });
    }
}
