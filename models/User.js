const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called `friendCount` that retrieves the length of the 
// user's `friends` array field on query.

userSchema
  .virtual('friendCount')
  .get(function() {
    return this.friends.length;
  });

// Initialise the User model
const User = model('user', userSchema);

module.export = User;
