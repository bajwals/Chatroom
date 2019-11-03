var users = [
    {
        "username": "bobcat",
        "message": "",
    },
    {
        "username": "gorilla",
        "message": "",
    },
    {
        "username": "rabbit",
        "message": "",
    },
    {
        "username": "yak",
        "message": "",
    },]
var userChoice;


$("#bobcat").on("click", function() {
    userChoice = users[0].username;
    $("#button-holder").attr("display", "none");
    console.log(userChoice);
})
$("#gorilla").on("click", function() {
    userChoice = users[1].username;
    $("#button-holder").attr("display", "none");
    console.log(userChoice);
})
$("#rabbit").on("click", function() {
    userChoice = users[2].username;
    $("#button-holder").attr("display", "none");
    console.log(userChoice);
})
$("#yak").on("click", function() {
    userChoice = users[3].username;
    $("#button-holder").attr("display", "none");
    console.log(userChoice);
})


