import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnUpClick = () => {
        let upText = text.toUpperCase()
        setText(upText)
        props.showAlert('Uppercase is selected','success')
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }
    const handleFirstLetterCaps = () => {
        let first = text.charAt(0).toUpperCase()
        setText(first + text.slice(1))
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert('lowercase is selected','success')
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <div className="mb-3 text-center">
                    <label htmlFor="myBox" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><h2><strong>{props.heading}</strong></h2></label>
                    <textarea className="form-control" id="myBox" rows="15" value={text} onChange={handleOnChange} style={{
                        color: props.mode === 'dark' ? 'white' : 'black',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529'
                    }}></textarea>
                </div>
                <button className="btn btn-success" onClick={handleOnUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-success mx-2" onClick={handleOnLowClick}>convert to lowercase</button>
                <button className="btn btn-success " onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                <button className="btn btn-success mx-2" onClick={handleFirstLetterCaps}>First letter Capitaliser</button>
            </div>
            <div className="container my-3 text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="summary my-5">
                    <h3 className='my-3'><strong>Your Text Summary</strong></h3>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                </div>
                <div className="preview my-5">
                    <h3 className='my-3'><strong>Preview</strong></h3>
                    <p  style={{color : props.mode === 'dark' ? 'bisque' : 'black'}}>{text.length>0 ? text : 'This is your preview'}</p>
                </div>
            </div>
        </>
    )
}
