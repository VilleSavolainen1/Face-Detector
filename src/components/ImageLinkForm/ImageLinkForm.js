import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className="f1 white center">
                {'Face Detector'}
            </p><br/>
            <p className="f5 white center">
                {'Paste image url:'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center hover-black w-100" type="text" onChange={onInputChange}/>
                <button className="b--light-blue w-30 grow f4 link ph3 pv2 dib white bg-blue br3" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;