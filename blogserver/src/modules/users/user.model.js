const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, " Email is required"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should have at least 6 characters"],
  },
  likedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = model("User", userSchema);
