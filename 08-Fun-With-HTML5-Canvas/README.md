# Fun with HTML 5 Canvas

See online at Codepen [http://codepen.io/quangnd/full/xgNKmN/](http://codepen.io/quangnd/full/xgNKmN/)

1. Learn more about fetch

	* [Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

2. Note

	* Fetch data
		```
		fetch(endpoint)
		.then(blob => blob.json())
		.then(city => cities.push(...city));
		.catch(err => {  
			console.log('Fetch Error :-S', err);  
		});
		```
	* Create new RegExp `const regex = new RegExp(value, 'gi');`  //global and incasesensitve
    * Return match `text.match(regex)`