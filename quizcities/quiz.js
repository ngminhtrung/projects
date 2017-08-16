let questionData = [
		{
			question: "1. Where can the Eiffel Tower be seen?", 
			answer: 

				["Paris, France",
				"London, the United Kingdom",	
				"Brussels, Belgium",
				"None of the above."],

			correct_answer: "Paris, France",
			explanation: " It is worth visiting in Paris once. Yes, it is touristy and you should be wary of pickpockets" +
			 "in the vicinity, but the sight of one of the world's most beautiful cities from above are fabulous - " + 
			 " better from the second level than the third and final floor, where a glass screen blocks the view." +
			 " If you take the stairs rather than the lift, you will also come up close to the immense web of steel" +
			 " lattices from which it was built. Pause, too, to peer over the edge of the " 

		},

		{
			question: "2. Where is 'The Acropolis' located (look at the picture)?", 
			answer: 

				["Amsterdam, the Netherlands",
				"Istanbul, Turkey",	
				"Beirul, Lebanon",
				"Athen, Greece"],

			correct_answer: "Athen, Greece",
			explanation: "There's a good reason some three million people visit the Acropolis in Athens every year." + 
			" The 'sacred rock' dates from the 5th century BC, and the Parthenon, its most famous temple, supported by" +
			"46 Doric columns, is considered to be the most influential buildings in classical architecture. Jane Foster," + 
			" Telegraph Travel's Athens expert, advises walking below the Acropolis at nigh, 'when it is at its most" + 
			"magnificent, bathed in golden floodlighting."
		},

		{
			question: "3. What is the name of this ruin which is in Rome?", 
			answer: 

				["Roman Forum",
				"Colosseum",	
				"Via dei Fori Imperiali",
				"Trevi Fountain"],

			correct_answer: "Colosseum",
			explanation: "Telegraph Travel's Rome expert, Lee Marshall, says that the Colosseum is 'unmissable, especially" + 
			"now that they have extended the visitor route to the underfloor passageways through which gladiators and wild" + 
			"beasts made their entrances.' The arena, built to seat more than 50,000 people, and last year one of the wooden machine" + 
			" that carried the lions and other wild animals to certain death in the amphitheatre was recreated." + 
			" A wolf was placed in the machine - but rather than being sent to its death, it was rewarded with a biscuit afterwards."
		},

		{
			question: "4. Where can we see the Tower of Pisa??", 
			answer: 

				["Frankfurt, Germany",
				"Pisa, Italy",	
				"Lyon, France",
				"Budapest, Hungary"],

			correct_answer: "Pisa, Italy",
			explanation: "Ignore the people posing for photos pretending to hold the edifice in place, and admire instead this surprisingly" + 
			"small freestanding bell tower of Pisa's nearby cathedral. It leans at about 3.99 degrees - an improvement on a pre-restoration " + 
			"5.5 degree angle - and is in brilliant white marble. Be prepared for a confusing ticketing system and lots of tourist tat on sale " +
			 "- both are worth it to see this once."
		},

		{
			question: "5. In which year the Berlin wall which crossed the Brandenburg gate was collapsed?", 
			answer: 

				["1945",
				"1961",	
				"1989",
				"1990"],

			correct_answer: "1989",
			explanation: "At the intersection of the colossal Unter den Linden and Ebertstraße in Berlin, this neoclassical arch was built" +
			" as a sign of peace in the late 18th century - but suffered heavy damage during the Second World War, and held a sombre location" +
			" right next to the Berlin Wall in the post-conflict partitioned country. It underwent an extensive renovation in the early 2000s," + 
			" and is now a superb sight among the more modern buildings of the German capital."
		}





]

// let rightAnswerNumber = 0;

function setData(n) {

		document.getElementById("question").innerHTML = questionData[n-1].question;
		
		let labelText = document.getElementsByClassName("radio-label");
		let inputValue = document.getElementsByName("optradio");
		let barProgress = document.getElementsByClassName("progress-bar");
		
		for (i=0; i<4; i++) {

			labelText[i].childNodes[1].data = questionData[n-1].answer[i];
			inputValue[i].value = questionData[n-1].answer[i];

		}

		barProgress[0].attributes[2].value = n * 20; 
		barProgress[0].attributes[5].value = "width:" + (n * 20) + "%";
		barProgress[0].childNodes[0].nodeValue = (n * 20) + "%";

		document.getElementById("question-image").src = "photo0" + n + ".jpg"

		document.getElementById("header").innerHTML = "<span class='red'>European </span><span class='blue'>must-see </span><span class='orange'>places </span>" 

	
}

function submit(element,n) {

	let inputValue = document.getElementsByName("optradio");

	for (i=0; i<4; i++) {

			if (inputValue[i].checked == true) {

				if (inputValue[i].value == questionData[n-1].correct_answer) {
					
					sessionStorage["rightAnswerNumber"] = Number(sessionStorage["rightAnswerNumber"]) + 1;

					document.getElementById("result").innerHTML = "CORRECT! " + "You've answered " + sessionStorage["rightAnswerNumber"] + " correct answer(s)! Good job!";
					
				} else 

				{
					document.getElementById("result").innerHTML = "WRONG";
				}
			} 

			inputValue[i].disabled = true;

	}

	document.getElementById("submit-btn").disabled = true;

	document.getElementById("explanation").innerHTML = questionData[n-1].explanation;

}

