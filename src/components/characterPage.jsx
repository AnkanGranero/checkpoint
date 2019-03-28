import React, { Component } from 'react';

export default class CharacterPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let char = this.props.character

        return < div >
            <p>{char.name}</p>
        </div >

    }
}