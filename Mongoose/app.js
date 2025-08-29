const { create } = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/node-mongo")
    .then(() => console.log("Connected to node-mongo successfully"))
    .catch((err) => console.log("Connection error:", err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now},
});

const User = mongoose.model("User", UserSchema);

// async function run() {
//     const newUser = await User.create({
//         name: "Soudipto",
//         email: "soudiptonag2012@gmail.com",
//         age: 13,
//         isActive: true,
//         tags: ["student"],
//     });

//     console.log("Inserted", newUser);
//     await mongoose.connection.close();
// }

// run();

// create a new user
async function runQueryExamples() {
    try {
        // create a new document

        // const newUser = await User.create({
        //     name: "Souparno",
        //     email: "souparnonag2004@gmail.com",
        //     age: 13,
        //     isActive: true,
        //     tags: ["developer", "designer"],
        // });
        // console.log("Created new user", newUser);

        // ----- OR -----

        const newUser = new User ({
            name: "Jack Does",
            email: "jackdoes@email.com",
            age: 76,
            isActive: false,
            tags: ["retiree"],
        });
        await newUser.save();

        // display all documents
        // const allUsers = await User.find({});
        // console.log("All the users: ");        
        // console.log(allUsers);

        // filter the documents
        // const getActiveusers = await User.find({isActive: true});
        // console.log("All the active users: ");        
        // console.log(getActiveusers);

        // get only one document
        // const getJohnDoeUser = await User.findOne({name: "John Doe"});
        // console.log(getJohnDoeUser);
        
        // get document using id
        // const getLastUserWithUserId = await User.findById(newUser._id);
        // console.log(getLastUserWithUserId);
        
        // get selecting fields of docs
        // const selectedFields = await User.find().select("name email -_id");
        // console.log(selectedFields);
        
        // limit number of documents displayed
        // const limitedUsers = await User.find().limit(3).skip(1);
        // console.log(limitedUsers);
        
        // sorting the docs
        // const sortedUsers = await User.find().sort({age: -1});
        // console.log(sortedUsers);

        // counting documents based on filter
        // const countDocuments = await User.countDocuments({isActive: true});
        // console.log("Number of documents with active users:",countDocuments);
        
        // deleting document
        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log("Deleted User ->",deletedUser);

        // updating document
        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set : {age : 100}, $push: {tags : "updated"}
        }, {new: true});
        console.log("Updated User:",updateUser);
        
    } catch(e) {
        console.log("Error:",e);        
    } finally {
        await mongoose.connection.close;
    }
}

runQueryExamples();