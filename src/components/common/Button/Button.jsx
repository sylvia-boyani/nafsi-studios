import "./Button.css";

function Button({ children }){

    return(

        <button className="primary-btn">

            {children}

        </button>

    );

}

export default Button;