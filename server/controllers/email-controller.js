const Email = require('../models/email-model')

createEmail = (req, res) => {
  const body = req.body

  const email = new Email(body)

  email
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: email._id,
        message: 'Email created'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Email not created',
      })
    })
}

module.exports = { createEmail }
