const mongoose = require('mongoose')


const connect = async () => {
    const mongoURI = process.env.MONGO_URI;
    try {
        await mongoose.connect(mongoURI)
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect