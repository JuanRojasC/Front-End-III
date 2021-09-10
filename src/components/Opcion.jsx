import React from 'react';

export default class Opcion extends React.Component{
    render(){
        return (
        <div className="opcion">
            <button  className="botones" value={this.props.texto} onClick={this.props.onClick}>{this.props.texto}</button>
            <h2>{this.props.opcion}</h2>
        </div> );
    }
}