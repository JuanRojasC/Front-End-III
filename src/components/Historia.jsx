import React from 'react';
import data from './data.json';
import Opcion from './Opcion';
import Recordatorio from './Recordatorio';

export default class History extends React.Component{

    state={
        narracion: data[0],
        opciones: [data[0].opciones.a, data[0].opciones.b],
        contador: 1,
        opcion: null
    }

    handleClick = (evento) => {
        if(this.state.contador < 5){
            let idABuscar = String(this.state.contador + 1) + evento.target.value.toLowerCase();
            let historia = data.find(e => e.id === idABuscar)
            this.setState(prevstate => ({ 
                contador: prevstate.contador + 1,
                narracion: historia,
                opciones: [ historia.opciones.a, historia.opciones.b],
                opcion: evento.target.value
            }));
        }else{
            alert("Fin de la Historia")
        }
    }

    render(){
        return (
            <div className="layout">
                <h2 className="historia">{this.state.narracion.historia}</h2>
                <div className="opciones">
                    {this.state.opciones.map((elemento, index) => <Opcion key={index} texto={index? "B" : "A"} opcion={elemento} onClick={this.handleClick}/> )}
                </div>
                <Recordatorio seleccionAnterior={this.state.opcion} />
            </div>
        );
    }
}