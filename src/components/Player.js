import { Image, StyleSheet } from 'react-native'
import * as DefaultStyle from "../styles/MainStyles"
import React, { Component } from 'react'

PLAYER_IMG_URL = "https://stats.nba.com/media/players/230x185/"
const styles = {
    width: 100,
    height: 100,
    borderColor: DefaultStyle.COLOR_PRIMARY,
    borderRadius: 50,
    borderWidth: 6,
    backgroundColor: DefaultStyle.COLOR_SECONDARY
}

export default class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Image
            style={styles}
            source={{ uri: PLAYER_IMG_URL + this.props.id + ".png" }}
        />
    }

}
