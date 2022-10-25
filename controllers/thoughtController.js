// calls Thought and User files from Model folder
const { Thought, User } = require ('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) = res.json(thoughts))

    }
}