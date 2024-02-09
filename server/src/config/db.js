const mongoose = require('mongoose')


const connect = async () => {
    const mongoURI = process.env.MONGO_URI;
    try {
        await mongoose.connect(mongoURI)
        console.log(`Connected to DB`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect