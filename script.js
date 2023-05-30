function backgroundchange(){
    document.body.style.backgroundColor = "rgb(134, 194, 212)";
}

function goodvibes(){
    document.getElementById("demo").innerHTML = "Be the best version of you!";
}

function time(){
    var date = new Date();
	document.getElementById("time").innerHTML = date;
}

function change_pic(){
    document.getElementById("pic").src = "dice-6.png"
}

function hide_pic(){
    document.getElementById("pic").style.visibility = 'hidden';
}

function show_pic(){
    document.getElementById("pic").style.visibility = 'visible';
}