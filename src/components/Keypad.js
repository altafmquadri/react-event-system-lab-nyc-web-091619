import React from 'react'

export default class Keypad extends React.Component {

    inputHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type="password" onKeyUp={this.inputHandler}></input>
        )
    }

}
