var hod = require('havenondemand');
client = new hod.HODClient('169c99ef-0df2-4cd6-85c6-4da5145b9a2a', 'v1');

var pukedata = function(err,resp,body){
	  if(body.aggregate !== undefined){
		for (i = 0; i < body.positive.length; i++){
		  	if(body.aggregate.sentiment == 'positive'){
		      console.log(body.positive[i].original_text);	
		      // console.log(body.positive[i].topic);
		      // topic_of_discussion[i] = body.positive[i].topic;
		      // console.log('topic of discussion is ' + topic_of_discussion);
		      // console.log(body.positive[i].score);
		    }
		    else if(body.aggregate.sentiment == 'negative'){
		      // console.log(body.negative[i].original_text);	
		      // console.log(body.negative[i].topic);
		      // console.log(body.negative[i].score);
		    }
		}
  }
}
var showdata = function(){
	for (i = 0; i < res.length; i++){
		var data = {'text' : res[i]}
		client.call('analyzesentiment', pukedata, data)
	}
}


var callback = function(err,resp,body){
	// console.log(body);
  // console.log(body.positive.length);	
  if(body.aggregate !== undefined){
		for (i = 0; i < body.positive.length; i++){
		  	if(body.aggregate.sentiment == 'positive'){
		      // console.log(body.positive[i].original_text);	
		      // console.log(body.positive[i].topic);
		      topic_of_discussion[i] = body.positive[i].topic;
		      // console.log('topic of discussion is ' + topic_of_discussion);
		      // console.log(body.positive[i].score);
		    }
		    else if(body.aggregate.sentiment == 'negative'){
		      // console.log(body.negative[i].original_text);	
		      // console.log(body.negative[i].topic);
		      // console.log(body.negative[i].score);
		    }
		}
  }
for (var i = 0 ; i < res.length - 1; i++) {
  	// console.log('topic of discussion at index '+ i + ' is ' + topic_of_discussion[i]);
  	if(topic_of_discussion[i] == null && topic_of_discussion[i-1] != null)
  		topic_of_discussion[i] = topic_of_discussion[i-1];
    var count = (res[i].match(/He/g) || []).length;
  	res[i] = res[i].replace("He", topic_of_discussion[i]);
  	// console.log(res[i]);
  console.log(topic_of_discussion);
  }
  showdata();
}
var virat = 'Virat Kohli is the hero for RCB\'S  win against KKR.He played really well and thus KKR had to face defeat.';
var file = 'In the comics, Black Widow was actually the 15th super hero to join The Avengers (in between #14 Black Knight and #16 Mantis). The Marvel Cinematic Universe has lots and lots of differences from the comics, however, and one of them is that Marvel really “lucked out” when they cast Scarlett Johansson as Black Widow in 2010’s Iron Man 2, making her one of the original team members in The Avengers, right up there with Captain America, Iron Man, Thor, and the Incredible Hulk. (In the comics, the female co-founder of the Avengers was the Wasp; indeed, she was the character who gave the team its name.) Scarlett Johansson has now appeared in five Marvel movies as Black Widow, but she has yet to star in her own solo Black Widow movie. This week, however, as people “did press” to promote Captain America: Civil War, there were two interesting quotes that suggest the Black Widow movie is finally closer to happening. Marvel Studios currently has nine movies scheduled from now until the end of 2019, including four team movies and five solo films (including Doctor Strange, Black Panther, Captain Marvel, and yes, Ant-Man and the Wasp). So, what’s in the works for 2020 and beyond? That question was poised to Marvel Studios president Kevin Feige recently, and he came right out and said what many fans have been asking for. Responding to a list that included Falcon, Hawkeye, and War Machine, Kevin Feige replied, “Of the characters that you’ve just mentioned I would say certainly the one creatively and emotionally that we are most committing to doing is Black Widow.” Feige also clarified that discussions were “ongoing,” so Marvel is not yet ready to confirm Black Widow, but… they’re working on it. Marvel announced their slate extending to 2019 in 2014, so there’s a very good chance that 2016 might be the year that they announce their Phase 4 films for 2020 and beyond. And Black Widow might be in there.'
var res = virat.split(".");

var topic_of_discussion = [];
for (i = 0; i < res.length - 1; i++){
	var data = {'text' : res[i]};
	client.call('analyzesentiment', callback, data);
}