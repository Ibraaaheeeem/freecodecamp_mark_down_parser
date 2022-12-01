import {marked} from "marked"
import Parser from 'html-react-parser';
import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [markDownText, setMarkDownText] = React.useState(
       "# I love React\n\
## I find it simple\n\
**Within 24 hours**\n\
>I built a random quote generator\n\
_and hosted it on_\n\n\
![Amplify Image](https://docs.amplify.aws/assets/ogp.jpg)\n\n\
[AWS Amplify](https://main.d2gc66ke3pak9h.amplifyapp.com/)\n\
* To create a new react app, I use `npx create-react-app`\n\
```\n\
// Creating a state in react\n\
const [state, changeState] = \n\
React.useState([quote_text, quote_author]);\n\
```"
  )
  const [htmlFromMarkDown, setHtmlFromMarkDown] = React.useState(marked(markDownText))
  function updateMarkDownText(event){
    setMarkDownText(event.target.value)
    setHtmlFromMarkDown(marked(event.target.value))
  }

  // function updateHtmlFromMarkDown (event) {
  //   setHtmlFromMarkDown(marked.parse(event.target.value))
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p class = "intro">Welcome to Markdown to HTML Parser</p>
        <p class = "intro">This app is written in React.js
          and makes use of the marked and 
          html-react-parser libraries.
          Type in the box below and see your 
          markdown rendered in html below it
        </p>
        <textarea id="editor"
        onChange={updateMarkDownText}
        value = {markDownText}
        cols={40}
        rows={10}

        >

        </textarea>
        <div id="preview">{Parser(htmlFromMarkDown)}</div>  
      </header>
      
    </div>
  );
 
}

export default App;
