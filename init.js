const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main().then((res) => {
    console.log('Connection successful');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "Alice",
    to: "Bob",
    msg: "Hello Bob!",
    created_at: new Date(),
},
    {
    from: "Sneh",
    to: "ahaaan",
    msg: "Hi Aman! How are you?",
    created_at: new Date(),
},
{
    from: "Amit",
    to: "Sam",
    msg: "I'm good, thanks! And you?",
    created_at: new Date(),
},
{
    from: "Samaya",
    to: "Asmita",
    msg: "Doing well, just busy with work.",
    created_at: new Date(),
},
{
    from: "Boby",
    to: "Arice",
    msg: "I'm fine, thanks for asking!",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);
  