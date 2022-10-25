const { Schema, Types } = require('mongoose');

// reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectID(),
        },
        reactionBody: {
            type: String, 
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // add getter method for the Date/Timestamp 
        },
    }, 
    { 
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
