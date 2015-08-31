/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').
    drawImage(video, 0, 0, canvas.width, canvas.height);
};

var constraints = {
  audio: false,
  video: true,
};

function successCallback(stream) {
  window.stream = stream; // make stream available to browser console
  attachMediaStream(video, stream);
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);

$('#continue').on('click', function(){
	var dataURL = canvas.toDataURL("image/png");
	// dataURL = dataURL.replace(/^data:image\/(png|jpeg);base64,/, "");
	console.log( dataURL );
	$.ajax({
		type: "POST",
		url: "/sailors",
		data: { image: dataURL }
	})
	.done(function(respond){console.log("done: "+respond);})
	.fail(function(respond){console.log("fail");})
	.always(function(respond){console.log("always");})
})