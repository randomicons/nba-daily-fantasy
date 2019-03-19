import * as DefaultStyle from "../styles/MainStyles"
import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Player from "./Player"


export default class PlayerCard extends Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)
    }

    _onPress() {
        console.log(this.props.selected)
        if (this.props.selected) {
            this.props.setSelected(null)
        } else {
            this.props.setSelected(this.props.id)
        }

    }

    render() {
        const styles = {
            backgroundColor: (this.props.selected ? DefaultStyle.COLOR_SECONDARY : DefaultStyle.COLOR_SELECTED),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: DefaultStyle.BORDER_RADIUS
        }
        return (
            < TouchableHighlight onPress={this._onPress}>
                <View style={styles}>
                    <Player id={this.props.id} />
                    <Text>Cost: {this.props.cost}</Text>
                    <Text>Avg Points: {this.props.avg}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}