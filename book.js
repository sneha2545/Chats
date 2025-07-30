const mongoose = require('mongoose');
main().then((res) => {
    console.log('Connection successful');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        maxLength: 100,
    } ,
    price:{
        type: Number,
        min: (1, "Price is too low for amazon selling"),
    },
    author: { 
        type: String
    },
    category:{
        type: String,
        enum: ['fiction', 'non-fiction'],
    }
})
const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "The Alchemist",
    price: 300,
    author: "Paulo Coelho"
});
book1.save()
.then((res) => {    
    console.log("Book saved successfully", res);
})
.catch((err) => {    
    console.log("Error saving book", err);
}   );