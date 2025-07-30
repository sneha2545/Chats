const mongoose = require('mongoose');
main().then((res) => {
    console.log('Connection successful');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

User.deleteOne({name: "Aries"}).then((res) => {
    console.log("Data deleted successfully", res);
}).catch((err) => {
    console.log("Error deleting data", err);    
});

// User.findOneAndUpdate({name: "Tony"}, {age: 21}, {new: true})
// .then((res) => {
//     console.log("Data updated successfully", res);
// })
// .catch((err) => {
//     console.log("Error updating data", err);
// });

// User.updateMany({age: {$gt: 50}}, {age: 49})
// .then((res) => {
//     console.log("Data updated successfully", res);
// }).catch((err) => {
//     console.log("Error updating data", err);    
// });

// User.updateOne({name: "Sneha"}, {age: 21})
// .then((res) => {
//     console.log("Data updated successfully", res);
// })
// .catch((err) => {
//     console.log("Error updating data", err);
// });

// User.find({age: {$gt: 48}})
// .then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });

// const user1 = new User({
//     name: "Sneha",
//     age: 20,
//     email: "sg@gmail.com",
// })
// user1.save()

// User .insertMany([
//     {name: "Tony", email:"th@gmail.com", age: 59},
//      {name: "Aries", email:"ar@gmail.com", age: 59},
//       {name: "Sunny", email:"su@gmail.com", age: 59},
    
//       //Promise
// ]).then((res) => {
//     console.log("Data inserted successfully", res);
// });
   