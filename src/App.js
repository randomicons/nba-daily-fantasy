import { FlatGrid } from 'react-native-super-grid';
import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PlayerCard from './components/PlayerCard'
import Player from './components/Player';
import { Bar } from 'react-native-progress';
import EStyleSheet from 'react-native-extended-stylesheet';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.INIT_MONEY = 200
    this.state = {
      currentTab: "PG",
      PG: -1,
      C: -2,
      SF: -3,
      PF: -4,
      SG: -5,
      selected: new Set(),
      moneyLeft: this.INIT_MONEY,
    }

    this.tabNames = ["PG", "SF", "PF", "SG", "C"]
  }

  setSelected = (playerId, playerCost) => {
    if (this.state.selected.has(playerId)) {
      console.log(this.state.selected)
      this.removeSelected(playerId, playerCost)
    }
    else {
      const curPlayerId = this.state[this.state.currentTab]
      this.state.selected.delete(curPlayerId)
      this.state.selected.add(playerId)
      console.log(curPlayerId)
      newState = {
        moneyLeft: this.state.moneyLeft - playerCost + (curPlayerId > 0 ? 50 : 0),
        selected: new Set(this.state.selected)
      }
      console.log(newState.moneyLeft)
      // Move to the next tab if its not set
      const idx = ((this.tabNames).findIndex((i) => i === this.state.currentTab) + 1) % this.tabNames.length
      if (this.state[this.tabNames[idx]] < 0)
        newState.currentTab = this.tabNames[idx]
      newState[this.state.currentTab] = playerId

      this.setState(newState)

    }
  }

  removeSelected = (playerId, playerCost) => {
    this.state.selected.delete(playerId)
    newState = { moneyLeft: this.state.moneyLeft + playerCost, selected: new Set(this.state.selected) }
    newState[this.state.currentTab] = -1
    this.setState(newState)
  }

  _onPressTab = (tabId) => {
    this.setState({ currentTab: tabId })
  }

  render() {
    let ids = [201935, 201936, 201937, 201938, 201939, 201941, 201942]
    const items = Array(13).fill(ids[(this.tabNames).findIndex(
      (i) => i === this.state.currentTab)])
    let tabContent =
      <FlatGrid
        itemDimension={100}
        items={items}
        renderItem={({ item }) => (
          <PlayerCard setSelected={this.setSelected}
            selected={this.state.selected.has(item)} clickable={this.state.moneyLeft >= 50} cost={50} avg={1} id={item} />)}
      />
    return (
      <View style={styles.container}>
        <FlatGrid
          itemDimension={60}
          items={(this.tabNames)}
          renderItem={({ item }) => (
            <TouchableHighlight style={styles.tab} onPress={this._onPressTab.bind(this, item)}>
              <View>
                <Player id={this.state[item]} style={{ width: 60, height: 60 }} />
                <Text>
                  {item}
                </Text>
              </View>
            </TouchableHighlight>)}
        />
        <Text>${this.state.moneyLeft}/${this.INIT_MONEY}</Text>
        <Bar width={350} progress={this.state.moneyLeft / this.INIT_MONEY} />
        {tabContent}
      </View>
    );
  }
}

styles = EStyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    flex: 1,
  },
  tab: {
    borderRadius: 15,
    backgroundColor: '$color_primary',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
