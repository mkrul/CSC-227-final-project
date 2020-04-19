const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
      validate: [{ validator: v => isWakeTechEmail(v), msg: 'Must be a valid Wake Tech email address' }],
    }
  },
  { versionKey: false },
  { timestamps: false },
)

module.exports = mongoose.model('emails', Email)
