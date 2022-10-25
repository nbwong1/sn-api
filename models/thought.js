const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// schema for Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: { 
                type: String,
                required: true, 
                minlength: 1,
                maxlength: 280,
            },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        }, 
        reaction: [reactionSchema],
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;