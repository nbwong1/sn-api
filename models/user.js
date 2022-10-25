const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // add validate after
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        //add friends
        friends: [ ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        // update to get information for Friends Array
        return 'this.friends.length';
    })
    // .set(function () {
    //     const 
    // });

const User = model('user', userSchema);

module.exports = User;