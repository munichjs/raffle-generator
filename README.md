Raffle Generator
================

Source
------

```js
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
	α.append("<img src='https://goo.gl/7PjTPy'></img>").append(γ);
	$('body').prepend(α);
};

ε();

let κ = setInterval(() => {
	π(λ[Math.floor(Math.random() * λ.length) + 1])
}, 200);

setTimeout(() => {
	clearInterval(κ);
}, 10000);
```

License
-------

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2014 Béla Varga &lt;netzzwerg@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.