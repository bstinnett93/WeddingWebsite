function SetHeartCountdown(){
	var daysToGo = GetDaysTillWedding();
	var bar = new ProgressBar.Path('#heart-path', {
  		easing: 'easeInOut',
 		duration: 1400
	});
	bar.set(0);
	bar.animate(1-daysToGo/155);
}

function GetDaysTillWedding(){
	var weddingDate = new Date(2018, 1, 25, 0, 0, 0);
	var today = new Date();
	today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
	return daysToGo = Math.round((weddingDate-today)/(1000*60*60*24));
}