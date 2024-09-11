let mongoose = require("mongoose");

let connectToMDB = async () => {

  let playerSchema = new mongoose.Schema({
    firstName : {
      type:String,
      require:[true,"First Name is Required"],
      minlength:2,
      maxlentgh:20,
      RegExp:[/^[a-zA-Z]+$/, 'First name must only contain letters']
    },
    lastName :  {
      type:String,
      require:[true,"Last Name is Required"],
      minlength:2,
      maxlentgh:20,
      RegExp:[/^[a-zA-Z]+$/, 'Last name must only contain letters']
    },
    age : {
      type:Number,
      RegExp:[/^[1-9][0-9]?[0-9]?$/ ,"Age must be enter in numbers"]
    },
    height : {
      type:Number,
      RegExp:[/^[1-9][0-9]?[0-9]?$/ ,"Age must be enter in numbers"]
    },
  });

  let player = new mongoose.model("players",playerSchema);


  let saveToDB = async()=>{
    try{

      let yuvraj = new player({
        firstName : "Yuvaraj",
        lastName : "Singh",
        age : 38,
        height : 5.8,
      });
    
     await yuvraj.save();

     let raina = new player({
      firstName : "Suresh",
        lastName : "Raina",
        age : 36,
        height : 4.8,
     });
    await raina.save();

    let kohli = new player({
      firstName : "Virat",
        lastName : "Kohli",
        age : 34,
        height : 5.2,
     }); 
await kohli.save();
      console.log("succesfully saved to MDB");
    }catch(err){
      console.log("Unable to save to DB");
      console.log(err);
    }
  }

  try {
    await mongoose.connect(
      "mongodb+srv://Ravi:Ravi@createdatabase.29g4i.mongodb.net/?retryWrites=true&w=majority&appName=createDatabase"
    );
    console.log("Succesfully connected to DB");
    saveToDB();
  } catch (err) {
    console.log("Unable to connect to DB");
    console.log(err);
  }
};

connectToMDB();
