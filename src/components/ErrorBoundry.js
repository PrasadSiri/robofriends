import React from "react";
import { Component } from "react";

class ErroBoundry extends Component{

    constructor(props){
        super(props);
        this.state = {hasErorr:false};
    }

    componentDidCatch(error,info){
        this.state.setState({hasErorr: true}); 
        console.log(error);
        console.log(info);       
    }

    render(){
        console.log("Cardlist Render");
        if (this.state.hasErorr){
            return <h1>Oooops There is a Erro</h1>
        }
        return this.props.children;
        
    }

};

export default ErroBoundry;