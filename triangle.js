/**
 * TODO: Write your code here
 */

var button1 = document.getElementById("btn");


button1.onclick = function(){
	"use strict";
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	a = Math.round(a*10)/10;
	b = Math.round(b*10)/10;
	c = Math.round(c*10)/10;
	
	checks(a,b,c);};

function check_triangle(length_1, length_2, length_3) {
	"use strict";
	if ((length_1===length_2) && (length_2===length_3)) {
		return "equilateral";
	}
	if (length_1+length_2 > length_3) {
		if (length_1===length_3) {
			return "iscosceles";
		} 
		else if (length_2 === length_3) {
			return "iscosceles";
		}
		else if (length_1===length_2) {
			return "iscosceles";
		}
		else {
			return "scalene";
		}
	}
	else {
		return "not triangle";
	}

	if (length_2+length_3 > length_1) {
		if (length_1===length_3) {
			return "iscosceles";
		} 
		else if (length_2 === length_3) {
			return "iscosceles";
		}
		else if (length_1===length_2) {
			return "iscosceles";
		}
		else {
			return "scalene";
		}
	}
	else {
		return "not triangle";
	}

	if (length_1+length_3 > length_2) {
		if (length_1===length_3) {
			return "iscosceles";
		} 
		else if (length_2 === length_3) {
			return "iscosceles";
		}
		else if (length_1===length_2) {
			return "iscosceles";
		}
		else {
			return "scalene";
		}
	}
	else {
		return "invalid";
	}
}


function angle_check(A,B,C) {
	"use strict";
	var rounded180 = Math.round(Math.PI/2 * 10)/10;
	var roundedA = Math.round(A*10)/10;
	var roundedB = Math.round(B*10)/10;
	var roundedC = Math.round(C*10)/10;
	if ((roundedA===rounded180) || (roundedB===rounded180) || (roundedC===rounded180)) {
		return "right";
	}
	else if (Math.max(roundedA, roundedB, roundedC)<rounded180) {
		return "acute";
	}
	else {
		return "obtuse";
	}
}

function angleA(a,b,c) {
	"use strict";
	var A = Math.acos((Math.pow(a,2) - Math.pow(b,2)-Math.pow(c,2))/(-2*c*b));
	return A;
}

function angleB(a,b,c) {
	"use strict";
	var B = Math.acos((Math.pow(b,2) - Math.pow(a,2)-Math.pow(c,2))/(-2*a*c));
	return B;
}
function angleC(a,b,c) {
	"use strict";
	var C = Math.acos((Math.pow(c,2) - Math.pow(b,2)-Math.pow(a,2))/(-2*a*b));
	return C;
}
function checks(a,b,c) {
	"use strict";
	if ((a<=0)||(b<=0)||(c<=0)) {
		console.log("Invalid input lengths. lesseq");
		return;
	}
	else if ((a===null) || (b===null)||(c===null)){
		console.log("Invalid input lengths. null");
		return;
	}
	
	var A = angleA(a,b,c);
	var B = angleB(a,b,c);
	var C = angleC(a,b,c);
	var angletype = angle_check(A,B,C);
	var typetri = check_triangle(a,b,c);
	console.log(a);
	console.log(b);
	console.log(c);
	var s = (a+b+c)/2;
	console.log(s);
	var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
	var perimeter = a+b+c;
	A = A*(180/(Math.PI));
	B = B*(180/(Math.PI));
	C = C*(180/Math.PI);
	var message = "This triangle has an area of " + area +", and a perimiter of " + perimeter +". It has angles of " + A+", " + B +", and " + C+". It is a/an "  + typetri +", " + angletype +" triangle";
	
	$(document.body).append("<h2> "+ message+". </h2>");
	console.log(message);
	
	
	
	
}

