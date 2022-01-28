function StopWatch() {
	let startTime, endTime, isRunning, duration = 0;

	this.start = function() {
		if (isRunning) {
			throw new Error('StopWatch has already started')
		}

		isRunning = true;
		startTime = new Date();
	}

	this.stop = function() {
		if (!isRunning) {
			throw new Error('StopWatch is not started');
		}

		isRunning = false;
		endTime = new Date();
		let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
		duration += seconds;
	}

	this.reset = function() {
		startTime = null;
		endTime = null;
		duration = 0;
		isRunning = false;
	}

	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		}
	});
}

const sw = new StopWatch();
sw.start();
sw.stop();
console.log(sw.duration)