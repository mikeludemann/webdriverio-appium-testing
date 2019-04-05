const assert = require('assert');

let pathScreen = "./test/screenshots/";
let pathRecord = "./test/records/";

describe('Google homepage', () => {
	it('should display the correct homepage title', () => {
		browser.url('http://google.com');

		//browser.startRecordingScreen();
		const title = browser.getTitle();
		console.log("Title is: " + title);
		//browser.saveRecordingScreen(pathRecord + "google.mp4");

		browser.saveScreenshot(pathScreen + 'google.png');

		assert.equal(title, 'Google');
	});
});
