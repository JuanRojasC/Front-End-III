import React from 'react';

export default class Recordatorio extends React.Component{

    state={
        seleccionAnterior: this.props.seleccionAnterior,
        historial: []
    }

    // DEPRECADO PERO FUNCIONANDO
    // componentWillReceiveProps(nextProps){
    //     this.setState({seleccionAnterios: nextProps.seleccionAnterior, historial: [...this.state.historial, nextProps.seleccionAnterior]})
    // }

    static getDerivedStateFromProps(props, state){
        
        if(props.seleccionAnterior === null){
            return null;
        }else{
            let nextHistorial = [...state.historial, props.seleccionAnterior]
            return {
                seleccionAnterior: props.seleccionAnterior,
                historial: nextHistorial
            }           
        }
    }

    render(){
        return(
            <div className="recordatorio">
                <h2>Seleccion anterior: {this.state.seleccionAnterior}</h2>
                <h2>Historial de opciones elegidas:</h2>
                <ul>
                    {this.state.historial.map((opcion, index) => <li key={index}>{opcion}</li>)}
                </ul>
            </div>
        );
    }

}