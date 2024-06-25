const mongoose = require('mongoose');
const UserDataSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userBio:{
        type: String,
        required: false,
    },
    userProfilePic:{
        type: String,
        required: false,
    },
    userContactNumber:{
        type: String,
        required: false,
    },
    userAddress:{
        type: String,
        required: false,
    },
    

  }, { timestamps: true });
  
  module.exports = mongoose.model('UserData', UserDataSchema);
  