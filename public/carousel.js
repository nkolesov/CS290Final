var left = document.getElementById("left_button");
var right = document.getElementById("right_button");
var image = document.getElementById("Image");

var images = ["/portrait.jpg", "/project.jpg", "/plane.jpg", "/1.jpg"]
var img_counter = 0

left.addEventListener("click", function(){
	img_counter -= 1
	if (img_counter < 0){
		img_counter = 0
	}
	image.src = images[img_counter];
});

right.addEventListener("click", function(){
	img_counter += 1
	if (img_counter == images.length){
		img_counter = 0
	}
	image.src = images[img_counter];
});