import "./App.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markDown, setMarkDown] = useState(`

  this is a peragraph

  **this is bolded text**

  > Block Quotes
  
  # Heading

  ## Heading 2
  
  1. list item 1
  2. list item 2 
  3. list item 3
  
  [visit my website](https://shubbhu.online)

  this is inline \`<div>Inline code</div>\`

  this is a block of code

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![nature](https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg)
  
  `);
  return (
    <div className="App">
      <header className="App-header">
        <textarea
          id="editor"
          value={markDown}
          onChange={(e) => {
            setMarkDown(e.target.value);
          }}
        ></textarea>
        <div id="preview">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
}

export default App;
