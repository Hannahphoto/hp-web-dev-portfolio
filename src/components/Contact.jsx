export default function Form() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label form="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">I will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label form="exampleInputPassword1" className="form-label">Message</label>
                    <textarea type="password" className="form-control" id="exampleInputPassword1"></textarea>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </>
    )
}