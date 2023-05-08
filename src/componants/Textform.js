import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("upper case clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        // console.log("upper case clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleBoClick = () => {
        sethandvalueStyle({
            fontWeight: 'bold'
        })
    }

    const handleCleClick = () => {
        let newText = " ";
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("on change called");
        setText(event.target.value);
        sethandvalueStyle({
            fontWeight: 'normal'
        })
    }


    const [handValueStyle, sethandvalueStyle] = useState({
        fontWeight: 'normal'
    });
    const [Text, setText] = useState("enter text here");
    // setText('meraj ali');
    return (
        <>
            <div className='container'>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', handValueStyle, color: props.mode === 'dark' ? 'white' : '#042743' }} value={Text} onChange={handleOnChange} placeholder="type text here " id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleBoClick}>Bold</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCleClick}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy text</button>



            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summery</h1>
                <p> {Text.split(" ").length} <b>Words</b> and {Text.length} <b>characters</b> </p>
                <p><b>{0.008 * Text.split(" ").length}</b> minutes take a person to read</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "enter something to preview here"}</p>
            </div>
        </>
    )
}
