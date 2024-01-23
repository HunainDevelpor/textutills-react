import React,{ useState } from 'react';


// import './Textutills.css';
// import PropTypes from 'prop-types';

function Textutills(props){
  const Upperconvert = () => {
    let newtext = text.toUpperCase();
    setText(newtext); 
    props.showAlert("converted successfully to UpperCase ","success")
}

const change = (event) => {

    setText(event.target.value);
}
const clear = () => {
    setText("");
    props.showAlert("cleared successfully ","success")
}
const [text, setText] = useState("");

const copytext=()=>{
  let textarea =document.getElementById("exampleFormControlTextarea1");
  textarea.rselect();
  textarea.setSelectionRange(0,9999);
  navigator.clipboard.writeText(textarea.value);
  props.showAlert("Copy text successfully ","success")
}

const Removespaces=()=>{

  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("Extra Space removed successfully ","success")
}







return(
<>

<div className={`container text-${props.mode==='light'?'dark':'light'} `} >
<div className="mb-3">
    <h2 className=" py-3">Enter the Text here to analyze</h2>
  <label for="exampleFormControlTextarea1" className="form-label">Textarea</label>
  <textarea className={`form-control bg-${props.mode==='light'?'light':'secondary'} text-${props.mode==='light'?'dark':'light'}  `} value={text} id="exampleFormControlTextarea1" onChange={change} rows="7"></textarea>
  <div className="container my-3">
  <div onClick={Upperconvert}className="btn btn-secondary mx-2">UpperCase</div>
  <div onClick={clear} className="btn btn-secondary mx-2">Clear</div>
  <div onClick={copytext} className="btn btn-secondary mx-2">Copy</div>
  <div onClick={Removespaces} className="btn btn-secondary mx-2">Remove Extra Spaces</div>
  {/* <div onClick={toggle} className="btn btn-secondary mx-2">mode</div> */}


  </div>
</div>
</div>

</>
);
}
export default Textutills;