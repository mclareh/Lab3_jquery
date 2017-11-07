$(document).ready(function() {
	
	var ogText;
	var name;
	var tableNum;
	var number;
	var party;
	var table;
	var usersName;
	var userNum;
	var partySize;
	
	
$(".available").on("click", function(event) {
	table = $(this);
	tableNum = table.text();
	$("h4").text("Table Number: " + tableNum);
	$(".form").css("display", "block");
});
	
	
 $(".available").mouseenter(function() {
    $(this).fadeTo(500, 0.5);
  });
	
	
  $(".available").mouseleave(function() {
    $(this).fadeTo(500, 1);
  });
	
	
 $("div").mouseenter(function(e) {
    if ($(this).hasClass("reserved")) {
		$(".table").fadeToggle(500);
		name = $(this).attr("name");
		party = $(this).attr("party");
		number = $(this).attr("number");
		$(".tableName").text(name);
		$(".tableNum").text(number);
		$(".tableParty").text(party);
		$(this).off("click");
		$(".table").offset({left:e.pageX,top:e.pageY});
	}
  });
	
  $("div").mouseleave(function() {
    if ($(this).hasClass("reserved")) {
		$(".table").fadeToggle(500);
	}
  });

$(".submit").on("click", function(){
	usersName = $("#name-id").val();
	$("#name-id").val("");
	table.attr("name", usersName);
	userNum = $("#num-id").val();
	$("#num-id").val("");
	table.attr("number", userNum);
	partySize = $("#party-id").val();
	$("#party-id").val("");
	table.attr("party", partySize);
	table.removeClass("available").addClass("reserved");
	$(".form").hide();
});

$(".closeForm").on("click", function() {
	$(".form").css("display", "none");
});
	

});

