import React, { Component } from "react";

class MenuSuperior extends Component{
    render(){
        return(
            <nav className = "navbar navbar-expand-lg  navbar-dark bg-dark">
                <a href ="/" className = "navbar-brand">Single Page</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav">
                    
                    </ul>
                </div>
            </nav>
        )
    }
}
export default MenuSuperior;