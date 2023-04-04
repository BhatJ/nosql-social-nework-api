const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
      get: formatDate,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// A getter function to format the returned date.
// Converts date.now (ms since 1970) to something human readable
function formatDate(createdAt) {
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}\${month}\${year}`;
}

module.exports = reactionSchema;
