import { useState } from "react";
import ReactDOM from 'react-dom';

function Form() {
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');
    const [errorMessage, setErrorMessage]= useState('');

    const handleInputChange = (event) =>{
        setEmail(event.target.value)
        }

    const handleChange = (event) => {
        // const (email, value ) = e.target;
        setTextarea(event.target.value);
        }

    const handleSubmit = (event)=> {
        event.preventDefault();

        if(!handleInputChange(email)){
            setErrorMessage('Email needs to be filled. ');
            return;
        }if(!handleChange(textarea)){
            setErrorMessage('Textatrea needs to be filled');
        }
        setEmail('');
        setTextarea('');
        }
    

    return (
        <>
            <form onSubmit={{handleSubmit}}>
                <div className="mb-3">
                    <label form="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleInputChange}></input>
                    <div id="emailHelp" className="form-text">I will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label form="exampleInputPassword1" className="form-label">Message</label>
                    <textarea name="postContent" value={textarea} onChange={handleChange} className="form-control"></textarea>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </>
    );
}

export default Form;