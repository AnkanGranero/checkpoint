import React, { Component } from 'react';
import Modal from "./modal"

const API_URL = "https://rickandmortyapi.com/api/character/?page=1"

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            characters: [],
            showModal: false,
            modalChar: [],
            RandomCharacters: [],
            characterPage: false,
            isLoading: true,


        }
    }

    populateWithRandomCharacters() {
        fetch(API_URL + `"${this.createRandomNumbers().join(",")}"`)
            .then((data) => data.json())
            .then(data => this.setState({ RandomCharacters: data }))

    }


    populateWithCharacters() {
        fetch(API_URL /* + `${this.createRandomNumbers().join(",")}` */)
            .then((data) => data.json())
            .then(data => this.setState({
                characters: data.results,
                isLoading: false
            }))


    }
    componentDidMount() {
        this.populateWithCharacters()

    }
    openModal(char) {
        this.setState({
            showModal: true,
            modalChar: char
        })
    }
    closeModal() {
        this.setState({
            showModal: false,
            modalChar: []
        })
    }

    openCharacterPage() {
        this.setState({
            characterPage: true
        }
        )
    }
    closeCharacterPage() {
        this.setState({
            characterPage: false
        }
        )
    }

    createRandomNumbers() {
        //än så länge så kan det bli dubletter.
        let arrOfNumbers = [];
        for (let i = 0; i < 20; i++) {
            let x = Math.floor(Math.random() * (100) + 1)
            if (arrOfNumbers.filter(num => x !== num)) {
                arrOfNumbers.push(x);
            }
            else { i-- }
        }
        return arrOfNumbers
    }




    render() {






        const style = {
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            backgroundImage: "linear-gradient(-90deg,grey, white)"

        }

        const characterStyle = {
            margin: "10px",
            border: "5px solid black",
            borderRadius: "10px",
            textAlign: "center",
            background: "rgb(0, 0, 0, 0.3)",


        };
        const imageStyle = {
            container: "black",
            padding: "2px",
            border: "10px solid black",
            borderRadius: "10%",
            margin: "10px"

        }



        const info = this.state.characters
            .map((info) => (info))

        console.log(info)

        const characters = this.state.characters
            .map((char) => !char.name ? <p>"loading"</p> : (<div style={characterStyle}
                onClick={this.openModal.bind(this, char)}>
                <img src={char.image} style={imageStyle} alt=""></img>
                <ul>
                    <li>{char.name}</li>
                    <li>Species: {char.species}</li>
                    <li>Origin: {char.origin.name}</li>
                    <li>Status: {char.status}</li>

                </ul>
            </div>))

        const modalChar = this.state.modalChar



        console.log(characters)

        return (
            this.state.isLoading ? <div>
                <h1>IS LOADING...</h1>
                <img src='../images/morty.gif'></img>
            </div > : (<div >

                {this.state.showModal && <Modal modalChar={modalChar}
                    closeModal={this.closeModal.bind(this)}></Modal>}


                <div style={style}>{characters}</div>

            </div>)


        );
    }
}
