# Fetch In Javascript

fetch() allows you to make network requests. 

## Installation

By simply cloning this repository.

## Usage

```javascript
fetch('./api/some.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

// Credits - https://developers.google.com/web/updates/2015/03/introduction-to-fetch
```



## License
[MIT](https://choosealicense.com/licenses/mit/)