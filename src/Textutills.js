import React,{ useState } from 'react';


// import './Textutills.css';
// import PropTypes from 'prop-types';

function Textutills(props){
  const Upperconvert = () => {
    let newtext = text.toUpperCase();
    setText(newtext); 
    {text.length!==0&&  props.showAlert("converted successfully to UpperCase ","success")}
}

const change = (event) => {

    setText(event.target.value);
}
const clear = () => {
    setText("");
    {text.length!==0&& props.showAlert("cleared successfully ","success")}

}
const [text, setText] = useState("");

const copytext=()=>{
  let textarea =document.getElementById("exampleFormControlTextarea1");
  textarea.select();
  textarea.setSelectionRange(0,9999);
  navigator.clipboard.writeText(textarea.value);
  {text.length!==0&&props.showAlert("Copy text successfully ","success")}
}

const Removespaces=()=>{

  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
  {text.length!==0&&props.showAlert("Extra Space removed successfully ","success")}
}







return(
<>

<div className={`container text-${props.mode==='light'?'dark':'light'} `} >
<div className="mb-3">
    <h2 className=" py-3">Enter the Text here to analyze</h2>
  <label for="exampleFormControlTextarea1" className="form-label">Textarea</label>
  <textarea className={`form-control bg-${props.mode==='light'?'light':'secondary'} text-${props.mode==='light'?'dark':'light'}  `} value={text} id="exampleFormControlTextarea1" onChange={change} rows="7"></textarea>
  <div className="container my-3">
  <div onClick={Upperconvert}className="btn btn-secondary my-2 mx-2">UpperCase</div>
  <div onClick={clear} className="btn btn-secondary mx-2 my-2">Clear</div>
  <div onClick={copytext} className="btn btn-secondary mx-2 my-2">Copy</div>
  <div onClick={Removespaces} className="btn btn-secondary mx-2 my-2">Remove Extra Spaces</div>
  <div className="container my-3">
                    <h3>Your Text Summary</h3>
                    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                </div>


  </div>
</div>
</div>

</>
);
}
export default Textutills;