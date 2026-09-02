const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
});

// This plugin hashes passwords before saving them. A password is never stored
// as plain text in MongoDB.
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
