  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYuALTl15F0B90ETRuI_M_NtMWdImDiRU",
    authDomain: "traintime-9a263.firebaseapp.com",
    databaseURL: "https://traintime-9a263.firebaseio.com",
    projectId: "traintime-9a263",
    storageBucket: "traintime-9a263.appspot.com",
    messagingSenderId: "930494929581"
  };
 

firebase.initializeApp(config);


var database = firebase.database();

 

$("#add-train-btn").on("click", function(event) {
    
    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var trainFtt = moment($("#fttInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
    var trainFrequency = $("#frequencyNameInput").val().trim();
    

 
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        ftt: trainFtt,
        frequency: trainFrequency,
};


database.ref().push(newTrain)

console.log(trainName.name)
console.log(trainDestination.destination)
console.log(trainFtt.ftt)
console.log(trainFrequency.frequency)

 

alert ("Thanks for choo choo choosing to add a train")

 

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#fttInput").val("");
$("#frequencyNameInput").val("");

dateAdded: firebase.database.ServerValue.TIMESTAMP

});

 

database.ref().on("child_added", function(childSnapshot) {
    
    console.log(childSnapshot.val());

        var firebaseTrainName = childSnapshot.val().name;
        var firebaseTrainDestination = childSnapshot.val().destination;
        var firebaseTrainFtt = childSnapshot.val().ftt;
        var firebaseTrainFrequency = childSnapshot.val().frequency;
            
            console.log(firebaseTrainName)
            console.log(firebaseTrainDestination)
            console.log(firebaseTrainFtt)
            console.log(firebaseTrainFrequency)


             var diffTime = moment().diff(moment.unix(firebaseTrainFtt), "minutes");
             var timeRemainder = moment().diff(moment.unix(firebaseTrainFtt), "minutes") % firebaseTrainFrequency;
             var minutes = firebaseTrainFrequency - timeRemainder
             var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");

$("#trainTable > tbody").append("<tr><td>" + firebaseTrainName + "</td><td>" + firebaseTrainDestination + "</td><td>" + firebaseTrainFrequency + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

 

});