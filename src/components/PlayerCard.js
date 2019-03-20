import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Player from "./Player"
import est from 'react-native-extended-stylesheet'


export default class PlayerCard extends Component {
    constructor(props) {
        super(props)
    }

    _onPress = () => {
        if (this.props.clickable)
            this.props.setSelected(this.props.id, this.props.cost)
    }

    render() {
        const styles = est.create({
            main: {
                backgroundColor: (this.props.selected ? '$color_secondary' : '$color_selected'),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: '$border_radius',
                opacity: (this.props.selected || this.props.clickable) ? 1 : .5
            }
        })
        return (
            < TouchableHighlight onPress={this._onPress} >
                <View style={styles.main}>
                    <Player id={this.props.id} style={{ width: 100, height: 100 }} />
                    <Text>Cost: {this.props.cost}</Text>
                    <Text>Avg Points: {this.props.avg}</Text>
                </View>
            </TouchableHighlight >
        )
    }
}