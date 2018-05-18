console.log("hoc.js");

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h3>Info</h3>
        <div>The info is : {props.info} </div>     

    </div>
);

// HOC
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated && <WrappedComponent { ...props } />}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details" />, document.getElementById("appRoot"));
