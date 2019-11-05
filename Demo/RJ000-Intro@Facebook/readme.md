
## React tutorial@Facebook (Tic Tac Toe app)

### Steps/To verify:

1) Html file with inline jsx script
2) Jsx needs babel transpiler
3) Transpilation process in browser is slow



### Why jsx code needs to be inline:
#### Issue with cors loading .js or .jsx from external file locally 

Issue loading locally: CORS error. Script to be loaded by babel has to delivered by a server.

According to MDN, if you specify a script tag with a type that's not text/javascript, it will be ignored by the browser:

The embedded content is treated as a data block which won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The src attribute will be ignored.

In other words, the browser does not load or run index.js in your example. This makes sense - if it did, you'd get a syntax error, as your browser can't understand JSX.

What actually happens is that the babel-standalone script looks at your HTML, finds all of the script tags marked text/babel, loads them via XMLHttpRequest, and then compiles and runs them.
This is why you're getting CORS errors - the browser's not loading the file, the script is. Unfortunately, I don't think you can resolve this without using a web server or compiling your Babel code ahead of time.

from: 

#### Solution 1: jsx in line in html 
(it takes time to process and load the button)

#### Solution 2: jsx in line in html 
worth to set it up with create react app


### Resource:

React and Jsx in Browser:
[https://reactjs.org/docs/add-react-to-a-website.html](https://reactjs.org/docs/add-react-to-a-website.html)

React without Jsx
[https://reactjs.org/docs/react-without-jsx.html](https://reactjs.org/docs/react-without-jsx.html)

React Tic Tac Toe tutorial:
Link: [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

Babel RPL:
[https://babeljs.io/repl](https://babeljs.io/repl)
