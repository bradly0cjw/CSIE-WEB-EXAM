function getUrlParam(arg) {
	let urlString = window.location.href;
	let url = new URL(urlString);
	let v = url.searchParams.has(arg);
	return v;
}
if (getUrlParam("set") == true || localStorage.getItem('dev') == 1) {
	localStorage.setItem('dev', window.prompt("To Disable this fucking thing please input any value but 0 \nType 2 to bypass permenently", 1))
	if (localStorage.getItem('dev') == 0) {
		window.alert("Next time You will be Fucked")
		console.log("Next time You will be Fucked")
	} else if(localStorage.getItem('dev') == 2) {
		window.alert("To change this setting please use Param ?set to change option")
		console.log("To change this setting please use Param ?set to change option")
	}
	window.alert("U are safe now")
	console.log("U are safe now")
} else if (getUrlParam("dev") == true || localStorage.getItem('dev') == 2) {
	console.log("U are safe now")
} else {
// 	setTimeout(function () {
// 		var a = document.querySelector('.showads');
// 		b = a ? (a.offsetHeight ? false : true) : true;
// 		if (b) {
// 			window.alert("Adblocker Detected");
// 			window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
// 		}
// 	}, 200); // don't too fast or will make the result wrong.
// 	document.addEventListener('contextmenu', event => event.preventDefault());
// 	document.addEventListener('keydown', function (event) {


// 		if (event.key == 'F12') {
// 			// console.log("F12 was pressed");
// 			window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
// 			event.preventDefault();
// 			return false;
// 		}
// 		// disable I key
// 		if (event.ctrlKey && event.shiftKey && event.key == 'I') {
// 			window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
// 			event.preventDefault();
// 			return false;
// 		}

// 		// disable J key
// 		if (event.ctrlKey && event.shiftKey && event.key == 'J') {
// 			window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
// 			event.preventDefault();
// 			return false;
// 		}

// 		// disable U key
// 		if (event.ctrlKey && event.key == 'K') {
// 			window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
// 			event.preventDefault();
// 			return false;
// 		}
// 	});
// 	"use strict";
// 	/// <reference types="./index.d.ts"/>
// 	/** @typedef {{ moreDebugs: number }} PulseCall */
// 	/** @typedef {{ isOpenBeat: boolean }} PulseAck */

// 	(() => {
// 		/** @type {DevtoolsDetectorConfig} */
// 		const config = {
// 			pollingIntervalSeconds: 0.25,
// 			maxMillisBeforeAckWhenClosed: 100,
// 			moreAnnoyingDebuggerStatements: 1,

// 			onDetectOpen: undefined,
// 			onDetectClose: undefined,

// 			startup: "asap",
// 			onCheckOpennessWhilePaused: "returnStaleValue",
// 		};
// 		Object.seal(config);

// 		const heart = new Worker(URL.createObjectURL(new Blob([
// 			// Note: putting everything before the first debugger on the same line as the
// 			// opening callback brace prevents a user from placing their own debugger on
// 			// a line before the first debugger and taking control in that way.
// 			`"use strict";
// onmessage = (ev) => { postMessage({isOpenBeat:true});
// 	console.log("Rickroll time"); for (let i = 0; i < ev.data.moreDebugs; i++) { debugger; }
// 	postMessage({isOpenBeat:false});
// };`
// 		], { type: "text/javascript" })));

// 		let _isDevtoolsOpen = false;
// 		let _isDetectorPaused = true;

// 	// @ts-expect-error
// 	// note: leverages that promises can only resolve once.
// 	/**@type {function (boolean | null): void}*/ let resolveVerdict = undefined;
// 	/**@type {number}*/ let nextPulse$ = NaN;

// 		const onHeartMsg = (/** @type {MessageEvent<PulseAck>}*/ msg) => {
// 			if (msg.data.isOpenBeat) {
// 				/** @type {Promise<boolean | null>} */
// 				let p = new Promise((_resolveVerdict) => {
// 					resolveVerdict = _resolveVerdict;
// 					let wait$ = setTimeout(
// 						() => { wait$ = NaN; resolveVerdict(true); },
// 						config.maxMillisBeforeAckWhenClosed + 1,
// 					);
// 				});
// 				p.then((verdict) => {
// 					if (verdict === null) return;
// 					if (verdict !== _isDevtoolsOpen) {
// 						_isDevtoolsOpen = verdict;
// 						const cb = { true: (config.onDetectopen, window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU"), false: config.onDetectClose }[verdict + ""];
// 						if (cb) cb();
// 					}
// 					nextPulse$ = setTimeout(
// 						() => { nextPulse$ = NaN; doOnePulse(); },
// 						config.pollingIntervalSeconds * 1000,
// 					);
// 				});
// 			} else {
// 				resolveVerdict(false);
// 			}
// 		};

// 		const doOnePulse = () => {
// 			heart.postMessage({ moreDebugs: config.moreAnnoyingDebuggerStatements });
// 		}

// 		/** @type {DevtoolsDetector} */
// 		const detector = {
// 			config,
// 			get isOpen() {
// 				if (_isDetectorPaused && config.onCheckOpennessWhilePaused === "throw") {
// 					throw new Error("`onCheckOpennessWhilePaused` is set to `\"throw\"`.")
// 				}
// 				return _isDevtoolsOpen;
// 			},
// 			get paused() { return _isDetectorPaused; },
// 			set paused(pause) {
// 				// Note: a simpler implementation is to skip updating results in the
// 				// ack callback. The current implementation conserves resources when
// 				// paused.
// 				if (_isDetectorPaused === pause) { return; }
// 				_isDetectorPaused = pause;
// 				if (pause) {
// 					heart.removeEventListener("message", onHeartMsg);
// 					clearTimeout(nextPulse$); nextPulse$ = NaN;
// 					resolveVerdict(null);
// 				} else {
// 					heart.addEventListener("message", onHeartMsg);
// 					doOnePulse();
// 				}
// 			}
// 		};
// 		Object.freeze(detector);
// 		// @ts-expect-error
// 		globalThis.devtoolsDetector = detector;

// 		switch (config.startup) {
// 			case "manual": break;
// 			case "asap": detector.paused = false; break;
// 			case "domContentLoaded": {
// 				if (document.readyState !== "loading") {
// 					detector.paused = false;
// 				} else {
// 					document.addEventListener("DOMContentLoaded", (ev) => {
// 						detector.paused = false;
// 					}, { once: true });
// 				}
// 				break;
// 			}
// 		}
// 	})();
}