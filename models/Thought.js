const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that 
// retrieves the length of the thought's reactions array field on query

thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length;
  });

// Initialise the User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;