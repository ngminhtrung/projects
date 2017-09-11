imageNumber = 12; 

pics = createImageArray(imageNumber);

function createImageArray(imageNumber) {

	var imagesArray = [];

	for (i=0; i< imageNumber; i++) {
		var imageObj = {
			_src: "photos/photo0" + String(Math.floor(i/2)) + ".png",
			_alt: ""
		};

		imagesArray.push(imageObj);
	}

	return shuffle(imagesArray);

}

var card = $(".card");
for(var i=0; i<pics.length; i++){
	$(card[i]).children(":nth-child(1)").attr("src", pics[i]._src);
	$(card[i]).children(":nth-child(1)").attr("alt", pics[i]._alt);
}
card.children(":nth-child(1)").toggleClass("flipped");
card.click(function(){
	$(this).children(":nth-child(1)").removeClass("flipped");
	$(this).children(":nth-child(2)").addClass("flipped");
});


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
return array;
}
