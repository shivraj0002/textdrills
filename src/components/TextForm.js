import React, { useState } from "react"; // using state
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState("");
  //function to change text in uppercase
  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase' , 'success')
  };
  //function to change text in lowercase

  const handleLoClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase' , 'success')

  };
  //function to change text in empty

  const handleClrClick = () => {
    
    let newText = "";
    setText(newText);
    props.showAlert('Text is cleared' , 'success')

  };
  // function to update out text variable at every time
  const handleOnChange = (e) => {
   
    setText(e.target.value);
  };
  // function to remove white spaces in our text area

  const handleRemWhClick = () => {
   
    let newText = text.trim();
    setText(newText);
    props.showAlert('White spaces removed' , 'success')

  };
  // function to copy the text
  const handleCopyClick = () => {
    const Text = document.getElementById("mybox");
   
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert('Copied to Clioboard' , 'success')

  };
  // this is function to remove extra spaces
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed' , 'success')

  };
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="My Box" className="form-label">
          Enter the text here
        </label>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#323162" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <div>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleUpClick}
        >
          convert in UPPER
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleLoClick}
        >
          convert in lower
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleClrClick}
        >
          clear text
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleRemWhClick}
        >
          remove white spaces
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleCopyClick}
        >
          copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          type="submit"
          onClick={handleExtraClick}
        >
          romove extra spaces
        </button>
      </div>
      <div className="container">
        <h3>Your paragraph summery</h3>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read the above data</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'enter something in above box to preview here'}</p>
      </div>
      </div>
    </>
  );
}
// TextForm.PropTypes = {
//  heading : PropTypes.string.isRequired
// }

// TextForm.defaultProps = {
//     heading : 'hello set heading here'
// }
