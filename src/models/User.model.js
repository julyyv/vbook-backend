const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 255,
    select: false,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    sparse: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'BANNED'],
    default: 'ACTIVE',
  },
  role: {
    type: String,
  },
}, { timestamps: true })

module.exports = model('User', userSchema)
