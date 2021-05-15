import React from "react";

function Form() {
    return (
        <div className="container">
            <h1> Welcome!!</h1>
            <h3> Our platform provides you the highest frequency words from the file mentioned!</h3><br/>
            <h3> Type the Number of words you want below <i class="far fa-hand-point-down"></i></h3>
            <form className="form" action="/result" method="POST">
                <input type="text" placeholder="Number Of Words" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Form;