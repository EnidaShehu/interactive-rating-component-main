$(".card.mb-3").show();
$(".card.text-center.mb-3").hide();

var userChosenNumber;

$(".number").click(function () {
    userChosenNumber = $(this).attr("id");
    if (clickedId) {
        userChosenNumber = clickedId;
    }
});

$("#submit-btn").click(function () {
    if (userChosenNumber) {
        var answer = "You selected " + userChosenNumber + " out of 5";
        $(".answer").text(answer);
        $(".card.mb-3").hide();
        $(".card.text-center.mb-3").show();
    } else {
        alert("Please select a number first.");
    }
});
