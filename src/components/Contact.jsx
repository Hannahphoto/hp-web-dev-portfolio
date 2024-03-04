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

        if(!setEmail){
            setErrorMessage('Email needs to be filled. ');
            return;
        }if(!setTextarea){
            setErrorMessage('Textatrea needs to be filled');
            return;
        }

        setErrorMessage('');

        console.log('Form subitted', {email, textarea});

        setEmail('');
        setTextarea('');
        }
    

    return (
        <>
            <form onSubmit={{handleSubmit}}>
                <div className="mb-3">
                    <label htmlFor="validationDefault01" form="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleInputChange} required></input>
                    <div id="emailHelp" className="form-text">I will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationDefault02" form="exampleInputPassword1" className="form-label" required>Message</label>
                    <textarea name="postContent" value={textarea} onChange={handleChange} className="form-control" id="validationDefault02"></textarea>
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