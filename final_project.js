
var input_str="";
var str_array = new Array(8);
var str_num = new Array(8);
var str_2string = new Array(8);
var str_matrix = new Array(8);


//feedback delay
var feedbackDelay1 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay1.wet.value = 1
var feedbackDelay2 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay2.wet.value = 1
var feedbackDelay3 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay3.wet.value = 1
var feedbackDelay4 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay4.wet.value = 1
var feedbackDelay5 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay5.wet.value = 1
var feedbackDelay6 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay6.wet.value = 1
var feedbackDelay7 = new Tone.FeedbackDelay("8n", 0).toMaster();
feedbackDelay7.wet.value = 1

//filter
var filter_1 = new Tone.Filter(100, "bandpass").connect(feedbackDelay1);
filter_1.Q = 2.0;
var filter_2 = new Tone.Filter(1000, "bandpass").connect(feedbackDelay2);
filter_2.Q = 2.0;
var filter_3 = new Tone.Filter(1200, "bandpass").connect(feedbackDelay3);
filter_3.Q = 2.0;
var filter_4 = new Tone.Filter(2000, "bandpass").connect(feedbackDelay4);
filter_4.Q = 2.0;
var filter_5 = new Tone.Filter(600, "bandpass").connect(feedbackDelay5);
filter_5.Q = 2.0;
var filter_6 = new Tone.Filter(400, "bandpass").connect(feedbackDelay6);
filter_6.Q = 2.0;
var filter_7 = new Tone.Filter(1600, "bandpass").connect(feedbackDelay7);
filter_7.Q = 2.0;



var noise1 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.1,
		"sustain":0.5
	}
}).connect(filter_1);
var noise2 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.1,
		"sustain":0.5
	}
}).connect(filter_2);
var noise3 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.01,
		"sustain":0.5
	}
}).connect(filter_3);
var noise4 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.01,
		"sustain":0.5
	}
}).connect(filter_4);
var noise5 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.01,
		"sustain":0.5
	}
}).connect(filter_5);
var noise6 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.01,
		"sustain":0.5
	}
}).connect(filter_6);
var noise7 = new Tone.NoiseSynth({
	noise : {
		"type":"white"
	}, 
	envelope : {
		"attack":0.005,
		"decay":0.01,
		"sustain":0.5
	}
}).connect(filter_7);


function Bootup() {
    var x = document.getElementById("myText").value;
    
	if (x === "ride") {
		y = "raɪd"
	}
	if (x === "wide") {
		y = "waɪd"
	}
	if (x === "sighed") {
		y = "saɪd"
	}
	if (x === "white") {
		y = "waɪt"
	}
	document.getElementById("demo").innerHTML = y;
	for (var i=0; i <4; i++ ) {
		str_array[i] = y.charAt(i);	
		
		if (str_array[i] === "r") {
			str_num[i] = 1;
		}
		if (str_array[i] === "a") {
			str_num[i] = 2;
		}
		if (str_array[i] === "ɪ") {
			str_num[i] = 3;
		}
		if (str_array[i] === "d") {
			str_num[i] = 4;
		}
		if (str_array[i] === "w") {
			str_num[i] = 5;
		}
		if (str_array[i] === "s") {
			str_num[i] = 6;
		}
		if (str_array[i] === "t") {
			str_num[i] = 7;
		}
	}

		/*(str_ascii[i] = str_array[i].charCodeAt(0);
		if (str_ascii[i].toString(2).length < 7) {
			str_2string[i] = "0"+str_ascii[i].toString(2)+"0";
		}
		else {
		str_2string[i] = str_ascii[i].toString(2)+"0";
		}
		var subarray = new Array(8);
		for (var j=0; j<8; j++) {
			subarray[j] = str_2string[i].charAt(j);
		}
		str_matrix[i] = subarray;
	} 
	for (var i=0; i<8; i++) {
		for (var j=0; j<8; j++) {
			gui_sequencer.matrix[j][i] = str_matrix[i][j]*1;
		}
	}
	gui_sequencer.draw()
	gui_sequencer.sequence(cur_bpm.value*4);
	sequence_data = gui_sequencer.val.list;*/

}



nx.onload = function () {
	
	nx.colorize("#00CCFF"); //setting color setting to default

	

	//start button for starting sound start and visualization
	gui_start.mode = "toggle"
	
	gui_start.on('*', function(data) {
		if (gui_start.val.press === 1) {
			for (var i=0; i <4; i++ ) {
				if (str_num[i] === 1) {
					if (i === 0){
						feedbackDelay1.delayTime.value = 0
						noise1.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay1.delayTime.value = "8n"
						noise1.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay1.delayTime.value = "4n"
						noise1.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay1.delayTime.value = "2n"
						noise1.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 2) {
					if (i === 0){
						feedbackDelay2.delayTime.value = 0
						noise2.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay2.delayTime.value = "8n"
						noise2.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay2.delayTime.value = "4n"
						noise2.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay2.delayTime.value = "2n"
						noise2.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 3) {
					if (i === 0){
						feedbackDelay3.delayTime.value = 0
						noise3.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay3.delayTime.value = "8n"
						noise3.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay3.delayTime.value = "4n"
						noise3.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay3.delayTime.value = "2n"
						noise3.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 4) {
					if (i === 0){
						feedbackDelay4.delayTime.value = 0
						noise4.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay4.delayTime.value = "8n"
						noise4.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay4.delayTime.value = "4n"
						noise4.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay4.delayTime.value = "2n"
						noise4.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 5) {
					if (i === 0){
						feedbackDelay5.delayTime.value = 0
						noise5.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay5.delayTime.value = "8n"
						noise5.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay5.delayTime.value = "4n"
						noise5.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay5.delayTime.value = "2n"
						noise5.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 6) {
					if (i === 0){
						feedbackDelay6.delayTime.value = 0
						noise6.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay6.delayTime.value = "8n"
						noise6.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay6.delayTime.value = "4n"
						noise6.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay6.delayTime.value = "2n"
						noise6.triggerAttackRelease("1n");
					}
				}
				if (str_num[i] === 7) {
					if (i === 0){
						feedbackDelay7.delayTime.value = 0
						noise7.triggerAttackRelease("8n");
					}
					if (i === 1){
						feedbackDelay7.delayTime.value = "8n"
						noise7.triggerAttackRelease("4n");
					}
					if (i === 2){
						feedbackDelay7.delayTime.value = "4n"
						noise7.triggerAttackRelease("2n");
					}
					if (i === 3){
						feedbackDelay7.delayTime.value = "2n"
						noise7.triggerAttackRelease("1n");
					}
				}

			}
		}
	})

	
}
