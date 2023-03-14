const mongoose = require('mongoose');

const {Schema} = mongoose;

const env = require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.l162asa.mongodb.net/AllDetails`


function main() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  }).catch(err => console.log(err))
}

main()

const mySchema = new Schema({
    name:{
        type: String,
        required: [true, 'required'],
        min: [3, "min requried"],
        max: [15, "max requried"] 
    },
    age:{
        type: Number,
        required: [true,'required']

    },
    sex:{
          type: String,
          required: [true,'required']
    },
    email:{
        type: String,
    }
})

const Person = mongoose.model("User",mySchema);

module.exports = Person;