const mongoose = require('mongoose')
const Schema = mongoose.Schema

var isEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return re.test(email)
}

var isWakeTechEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@(\w+([\.-]?\w+))?(waketech|my.waketech)\.edu$/

  return re.test(email)
}

const Email = new Schema(
  {
    email: { 
      type: String,
      required: true,
      unique: true, 
      lowercase: true,
      validate: [{ validator: v => isEmail(v), msg: 'Must be a valid email address' }],
    }
  },
  { versionKey: false },
  { timestamps: false },
)

module.exports = mongoose.model('emails', Email)
