import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { COLOR_PRIMARY } from './styles/MainStyles';
import PlayerCard from './components/PlayerCard'
import Player from './components/Player';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      selected: -1,
      currentTab: "PG",
      pointGuard: -1,
      center: -2,
      smallForward: -3,
      powerForward: -4,
      shootingGuard: -5
    }

    this.tabNames = { PG: "PG", center: "C", smallForward: "SF", powerForward: "PF", shootingGuard: "SG" }
  }

  setSelected = (playerCard) => {
    console.log(playerCard)
    this.setState({ selected: playerCard })
  }

  _onPressTab = (tabId) => {
    this.setState({ currentTab: tabId })
  }

  render() {
    let ids = [201935, 201936, 201937, 201938, 201939, 201941, 201942]
    const items = Array(7).fill(ids[Object.values(this.tabNames).findIndex(
      (i) => i === this.state.currentTab)])

    let tabContent =
      <FlatGrid
        itemDimension={100}
        items={items}
        renderItem={({ item }) => (
          <PlayerCard setSelected={this.setSelected}
            selected={this.state.selected === item} cost={0} avg={1} id={item} />)}
      />
    return (
      <View>
        <FlatGrid
          itemDimension={60}
          items={Object.values(this.tabNames)}
          renderItem={({ item }) => (
            <TouchableHighlight style={styles.tab} onPress={this._onPressTab.bind(this, item)}>
              <View>
                {this.state.selected != -1 && <Player id={this.state.selected} />}
                <Text>
                  {item}
                </Text>
              </View>
            </TouchableHighlight>)}
        />
        {tabContent}
      </View>
      // <View style={styles.container}>
      //   <Player id={201935} />
      //   <Player id={201935} />
      //   <Player id={201935} />
      //   <Player id={201935} />
      //   <Player id={201935} />
      //   <Player id={201935} />
      // </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    borderRadius: 15,
    backgroundColor: COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
