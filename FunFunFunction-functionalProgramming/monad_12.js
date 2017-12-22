// monad is a type of functor, more powerfull - implements flattMap
// flatMap return stream monad and will be flatten

/* function getInPortuguese(word) {
  const apiKey =
    'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0'
	const url =
    'https://www.googleapis.com' +
    '/language/translate/v2' +
  	'?key=' + apiKey +
    '&source=en' +
    '&target=pt' +
    '&q=' + encodeURIComponent(word)
  const promise = fetch(url)
 		.then(response => response.json())
	  .then(parsedResponse =>
    	parsedResponse
      	.data
        .translations[0]
        .translatedText
    )
  const stream = Bacon.fromPromise(promise)
  return stream
} --> getInPortugesse function copied from https://gist.github.com/mpj/ca167aad371c67372f3b - key disabled now

stream
    .flatMap(word => getInPortuguese(word))
    ..map(word => word.toUpperCase())
    .onValue(word => console.log(word));*/

const stream = new Bacon.Bus();

stream
    .map(word => word.toUpperCase())
    .onValue(word => console.log(word));

stream.push('cat');
stream.push('meal');
stream.push('trumpet');



