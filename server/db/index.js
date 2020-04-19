const mongoose = require('mongoose')
const uri = `mongodb+srv://test:${process.env.DB_PASSWORD}@cluster0-uadok.mongodb.net/craigslist?retryWrites=true&w=majority`

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
