const { Schema, model } = require('mongoose');
const  //need to create schema for thought

const userSchema = new Schema(
    {
        username: [
            {
                type: String,
                unique: true, 
                required: true,
                trim: true,
            },
        ],
        email: [
            {
                type: String,
                required: true, 
                unique: true, 

                validate: [validateemail, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
            }
        ]
        
            
)