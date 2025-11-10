import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
}

// called when an error is thrown is a child compomnents
static getDerivedStateFromError(error){
    return{hasError:true};
}
render() {
    if(this.state.hasError){
        return<h2>something went wrong</h2>
    }

return this.props.children;
}
}
export default ErrorBoundary;

