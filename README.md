# Introduction to JavaScript

### History of JavaScript
* Early Days
  * Created by Brendan Eich at Netscape in 10 days in 1995
  * Was not a highly respected programming language for about 10 years
  * Based on functional languages with some object-oriented patterns; is a multi-paradigm language
  * Applications like Google Maps and Gmail were where JavaScript gained popularity
* Standards
  * The standard for JavaScript implementations is called ECMAScript
    * Given that there are several **competing** JavaScript engines, the [European Computer Manufacturers Association (ECMA)](https://en.wikipedia.org/wiki/Ecma_International) is responsible for standardizing JavaScript, referred to as [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
  * The standard is updated yearly and the standard for that year is called ECMAScript 20xx (or ES 20xx); ES2015 or ES6.
  * [Browser Wars](https://en.wikipedia.org/wiki/Browser_wars) still leave us with legacy JavaScript implementations (and weirdness)
  * We can use transpiling to write JavaScript according to the standard we want and convert it to code that can be used for the majority of JavaScript applications

### Review Request-Response Cycle

![HTTP request response cycle from : https://www.oreilly.com/library/view/using-google-app/9780596802462/ch01.html](https://www.oreilly.com/library/view/using-google-app/9780596802462/httpatomoreillycomsourceoreillyimages295368.png)

* Request-Response lifecycle
  * Request is made to a server
  * We get a response back with data in binary, text, HTML, or JSON
  * We use that data in our application
* In the browser
  * A user enters an address in the address bar (or clicks a link)
  * A request is made to a server, which typically serves HTML
  * Included in that HTML are links to images, fonts, stylesheets, and scripts
  * Each one of those links means another request by the browser but without refreshing the page
  * When all the external links have loaded, the page itself is finished loading
* Loaded JavaScript
  * JavaScript can be written directly in HTML through a `script` tag
  * It can also be loaded externally through a `script` tag with a `src` attribute
  * When the browser sees JavaScript, it attempts to run it immediately
* JavaScript implementations
  * Each browser has its own [JavaScript engine](http://en.wikipedia.org/wiki/JavaScript_engine) or implementation
  * The [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) is the interface between the loaded HTML and the JavaScript code we write
  * Most browsers are converging on agreeing on web standards, but browsers need the ability to add proprietary features to CSS, JS, and the DOM (I'm looking at you Internet Explorer 😡)


  ## Documentation

- **PLEASE ALSO BURN THIS INTO YOUR MEMORY**. Always start with [MDN](https://developer.mozilla.org/en-US/) when looking at JS documentation. W3 Schools is great for HTML and CSS, **NOT SO MUCH FOR JAVASCRIPT**.

(all hail Mozilla)

- **INDENTATION AND PROPER STYLE ARE ALSO SUPER IMPORTANT MOVING FORWARD**. Airbnb has an amazing [JavaScript Style Guide](https://github.com/airbnb/javascript) if you're unsure about how to format your JS code. Trust me, learn to indent properly now before you end up in a curly bracket nightmare.


[Closures](https://whatthefork.is/closure)