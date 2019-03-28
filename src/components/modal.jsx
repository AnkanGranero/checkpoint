import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const wrapperStyle = {
            backgroundColor: "rgb(0, 0, 0, 0.3)",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,

        }

        const modalStyle = {

            height: "100vh",
            width: "100vh",
            position: "absolute",
            backgroundColor: "rgb(0, 0, 0, 0.4)",
            display: "block",
            left: "25%",
            alignContent: "center",
            color: "white"
        }

        return < div style={wrapperStyle} >
            < div style={modalStyle}
                onClick={this.props.closeModal.bind(this)}>
                <img src={this.props.modalChar.image} alt="character"></img>
                <p>{this.props.modalChar.name}</p>
                <p>Appears in Episode
            {this.props.modalChar.episode
                        .map(episode => (episode.split("/")[5] + ","))}</p>
            </div ></div >
    }
}