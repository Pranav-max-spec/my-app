import React, {useState} from 'react'
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        if(text===""){
            alert("Please Enter Text in the textarea box to convert to Uppercase")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Conveted to Uppercase");
        }
    }

    //     const handleEmail =(event)=>{
    //     let newText=text.split("@");
    //     let later = newText[1].split(".");
    //     setText("Your account is on "+ later[0] + " And your username could be" + newText[0]);
    // }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        if(text===""){
            alert("Please Enter Text in the textarea box to convert to Lowercase")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Conveted to lowercase");
        }
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const copyToClipboard = (event) => {
        console.log('Copied the text:' + text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        if(text===""){
            alert("Please Enter Text in the textarea box to copy the text")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Copied the text: " + text);
        }
      }

      const handleRemoveWhiteSpaces = (event) => {
        let i = 0;
        let newText = "";
        while (i < text.length) {
            if (text[i] !== " ") {
                newText += text[i];
            }
            i++;
        }
        setText(newText);
        if(text===""){
            alert("Please Enter Text in the textarea box to remove all spaces in the text box")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Removed all spaces");
        }
    }

    //   function myFunction() {
    //     // /* Get the text field */
    //     // var copyText = document.getElementById("myInput");

    //     // /* Select the text field */
    //     // copyText.select();
    //     // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    //     // /* Copy the text inside the text field */
    //     // navigator.clipboard.writeText(copyText.value);

    //     // /* Alert the copied text */
    //     // // alert("Copied the text: " + copyText.value);
    //  } 
    

    const handleClearClick = (event)=>{
        setText(event.target.value)
        if(text===""){
            alert("Please Enter Text in the textarea box to clear the text")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Clear the text");
        }
    }

    const handle = () => {
        console.log("The button is pressed");
        const str = text;
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
         const str2 = arr.join(" ");
        setText(str2);
        if(text===""){
            alert("Please Enter Text in the textarea box to Capitalised the first letter in every word the text")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Capitalised the first letter in every word");
        }
      };

      const firstLetterUp = () =>{
        let a = text.split(".");
      var newText = ' ';
      let b=0;
        for(let i=0; i<a.length-1; i++){
        var Text = a[i][b].toUpperCase()+a[i].slice(b+1)+'. ';
      newText += Text;
      b = 1;
      }
      setText(newText)
      if(text===""){
        alert("Please Enter Text in the textarea box to Capitalised the first letter in the text box")
    }
    else{
        navigator.clipboard.writeText(text);
        alert("Capitalised the first letter");
    }
      }

    const handleRemoveClick = (event) => {
        console.log("remove click");
        let newText = text;
        for (let i = 0; newText[i]; i++) {
          newText = newText.replace(" ", "");
        }
        setText(newText);
        if(text===""){
            alert("Please Enter Text in the textarea box to remove extra spaces")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Removed extra spaces");
        }
      };

        const handleFindAndReplace = (event) =>{
        let find = document.getElementById("find").value;
        let replace = document.getElementById("replace").value;
        let newText = text.replaceAll(find,replace);
        setText(newText);
        if(text===""){
            alert("Please Enter Text in the textarea box to replace the word in the text box")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Replaced the letter: " + text);
        }
    }

    const handleRemoveNewLine = (event) => {
        let newText = text.split(/[/\n/]+/);
        setText(newText.join(" "));
        if(text===""){
            alert("Please Enter Text in the textarea box to remove extra lines in the text box")
        }
        else{
            navigator.clipboard.writeText(text);
            alert("Removed the extra lines");
        }
      };
    
    const [text, setText] = useState('');
    // setText("new text") // Correct way to change the state
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
           <div className="mb-3">
           <label for="My box" class="form-label"></label>
           <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="10"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-2" onClick={handle}>Capitalize the first letter in every word</button>
           <button className="btn btn-primary mx-2" onClick={firstLetterUp}>Capitalize the first letter</button>
           <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
           <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy Text</button>
           <br />
           <br />
           <button className="btn btn-primary mx-3" onClick={handleRemoveClick}>remove spaces</button>
           {/* <button className="btn btn-primary mx-3" onClick={handleEmail}>E-mail</button> */}
           <button className="btn btn-primary mx-3" onClick={handleRemoveWhiteSpaces}>Remove extra spaces</button>
           <button className="btn btn-primary mb-3" onClick={handleRemoveNewLine}>Remove extra lines</button>
           <input type="text" className="form-control my-2" placeholder="Enter the text you want to change" id="find"/>
           <input type="text" className="form-control mb-2" placeholder="Enter the new text you want to add" id="replace"/>
           <button className="btn btn-primary mb-3 mx-1" onClick={handleFindAndReplace}>Replace</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.length>0 ? text.trim().split(" ").length : 0} Words and {text.length} characters</p><br />
            <h2>Preview</h2>
            <p placeholder="Enter something in the text box to Preview here">{text}</p>
        </div>
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Ratingname="simple-controlled"value={value}onChange={(event, newValue) => {setValue(newValue);}}/></Box> */}
        </>
    )
}