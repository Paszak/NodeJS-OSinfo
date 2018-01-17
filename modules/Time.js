function properTime (uptime) {
	var hours = (uptime / 3600).toFixed(0);
	var restHours = uptime % 3600; //reszta do minut
	var restMinutes = restHours % 60; //reszta do sekund
	var minutes = (restHours / 60).toFixed(0);
	var seconds = restMinutes.toFixed(0);
	return (hours + "h " + minutes + "min " + seconds + "sec");
}

exports.workingTime = properTime;