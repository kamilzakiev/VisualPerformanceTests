var gulp = require("gulp");
var fs = require("fs");
var config = require("./config.js");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until
    promise = webdriver.promise;

gulp.task("run", () => {
	var promiseFulFilled = promise.fulfilled();

	var results;

	config.testIterations.forEach(function(item) {
		promiseFulFilled.then(() => {
			console.log('Test: ' + item.testName);
			results = [];
		});

		for(var i = 0; i < item.iterationCount; i++) {
			promiseFulFilled.then(() => {				
				var iteration = iterate(item, i).then(function(execResult) {
					var driver = execResult.driver;	
					driver.close();

					var execTime = execResult.diff;
					results.push(execTime);
				});			
			});
		}

		promiseFulFilled.then(function(execResult) {
			var median = findMedian(results);
			console.log('Median = ' + median);
			console.log('');
		});

	});	
});

function iterate(item, number) {
	var driver = new webdriver.Builder()
	    .forBrowser('MicrosoftEdge')
	    .build();

	var deferred = promise.defer();
	
	driver.get(item.url);

	var startTime, stopTime, diff;

	// wait until Power BI dashboard started to load
	driver.wait(until.titleIs('Power BI')).
		then(() => {
			startTime = new Date();
			//console.log("Iteration " + number);
			if (config.verbose) {
				console.log('Start: ' + startTime.toLocaleTimeString());
			}
		});	
	
	if (item.cssIframe) {
	
		// wait until iframe is loaded
		driver.wait(until.elementLocated(By.css(item.cssIframe)), config.timeoutInMs, 'Could not locate iframe by css ' + item.cssIframe);

		// swicth to iframe context
		driver.switchTo().frame(driver.findElement(By.css(item.cssIframe)));

	}

	// wait for visual element to be added
	driver.wait(until.elementLocated(By.css(item.cssVisualElement)), config.timeoutInMs, 'Could not locate element by css ' + item.cssVisualElement);

	// wait until visual element is visible
	driver.wait(until.elementIsVisible(driver.findElement(By.css(item.cssVisualElement))), config.timeoutInMs, 'Could not find visible element of the visual by css ' + item.cssVisualElement)
		.then(() => {
			// Time to measure execution time
			stopTime = new Date();
			if (config.verbose) {
				console.log('End:   ' + stopTime.toLocaleTimeString());
			}
			diff = (stopTime - startTime)/1000;
			console.log((config.verbose ? 'Execution time: ' : '') + diff + (config.verbose ? ' sec' : ''));

			deferred.fulfill( {
				driver,
				diff
			});

			// take screenshot if needed
			if (config.takeScreenshot) {
				driver.takeScreenshot().
					then(function(data) {
						var dirName = __dirname + '/screenshots/';
						if (!fs.existsSync(dirName)){
						    fs.mkdirSync(dirName);
						}
						var fileName = dirName + item.testName + '.png';
				        fs.writeFile(fileName, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
				            if(err) throw err;
				        });
				    });

			}
		});			

	return deferred.promise;
}


// Finds the median of array
function findMedian(data) {
    // sort the resulting array
    var m = data.sort(function(a, b) {
        return a - b;
    });

    var middle = Math.floor((m.length - 1) / 2); 

    if (m.length % 2) {
        return m[middle];
    } else {
        return (m[middle] + m[middle + 1]) / 2.0;
    }
}