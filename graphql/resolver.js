const Todo = require('../models/todo');

module.exports = {
    async getTodos() {
        try {
            return await Todo.findAll();
        } catch(e) {
            throw new Error('Find todos in not available');
        }
    },

    async createTodo ({todo}) {
        try {
            return await Todo.create({
                title: todo.title,
                done: false
            });
        } catch(e) {
            throw new Error('Title is required');  
        }
    },

    async completeTodo ({id}) {
        try {
            const todo = await Todo.findByPk(id);

            todo.done = true;
            await todo.save();
            return todo;
        } catch(e) {
            throw new Error('Id is required');  
        }
    },

    async deleteTodo ({id}) {
        try {
            const todo = await Todo.findByPk(id);

            await todo.destroy();
            return true;
        } catch (e) {
            throw Error('Id is required');
            return false;
        }
    }
}