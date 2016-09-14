"use strict";
let λ = $('#rsvp-list li');

let π = (elm) => {
	let ζ = '';
	if($(elm).find('.rsvp-guests').length !== 0 && !Math.round(Math.random())) {
		ζ = ' +1';
	}
	$('#JS').text($(elm).find('.member-name a').text() + ζ);
};

let ε = () => {
	let α = $('<div/>');
	α.css({
		'width' : '100%',
		'height' : '100%',
		'background' : 'rgba(0,0,0,0.8)',
		'position' : 'fixed',
		'top' : 0,
		'left' : 0,
		'z-index' : 6789,
		'text-align' : 'center'
	});
	let γ = $('<h1 id="JS"></h1>').css({ 'color': '#FFF' });
	α.append("<img src='https://goo.gl/7PjTPy'></img>")
	 .append(γ)
	 .append("<img src='https://goo.gl/oa2t1I'></img>");
	$('body').prepend(α);
};

ε();

let κ = setInterval(() => {
	π(λ[Math.floor(Math.random() * λ.length) + 1])
}, 200);

setTimeout(() => {
	clearInterval(κ);
}, 10000);