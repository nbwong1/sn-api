const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
        reactions: [Reaction],
    }
);

thoughtSchema
    .virtual('getResponses')
    .get(function () {
        return this.reactions.length;
    });
    

const Thought = model('thought', thoughtSchema);

module.exports = Thought;