import { Image } from 'react-native'
import * as DefaultStyle from "../styles/MainStyles"
import React, { Component } from 'react'
import est from 'react-native-extended-stylesheet'

PLAYER_IMG_URL = "https://stats.nba.com/media/players/230x185/"

const styles = est.create({
    image: {
        borderColor: '$color_primary',
        borderRadius: 50,
        borderWidth: 6,
    }
})

export default class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Image
            style={[styles.image, this.props.style]}
            source={{ uri: PLAYER_IMG_URL + this.props.id + ".png" }}
        />
    }

}
