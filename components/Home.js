import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import style from '../style/style';
export default Home = ({ navigation }) => {

  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0 ) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }

  return (
    <View>
      <Text style={style.header}>Mini-Yahtzee</Text>
{ !hasPlayerName 
  ?
  <>
    <Text style={style.label}>For scoreboard enter your name</Text>
    <TextInput style={style.input} onChangeText={setPlayerName} autoFocus={true}></TextInput>
    <Pressable style={style.button} onPress={() => handlePlayerName(playerName)}>
      <Text style={style.buttonText}>OK</Text>
    </Pressable>
  </> 
  :
  <>
    <Text style={style.rules}>
      {/* Rules of the game
        THE GAME: Upper section of the classic Yahtzee
        dice game. You have {NBR_OF_DICES} dices and
        for the every dice you have {NBR_OF_THROWS}
        throws. After each throw you can keep dices in
        order to get same dice spot counts as many as
        possible. In the end of the turn you must select
        your points from {MIN_SPOT} to {MAX_SPOT}.
        Game ends when all points have been selected.
        The order for selecting those is free.
        POINTS: After each turn game calculates the sum
        for the dices you selected. Only the dices having
        the same spot count are calculated. Inside the
        game you can not select same points from
        {MIN_SPOT} to {MAX_SPOT} again.
        GOAL: To get points as much as possible.
        {BONUS_POINTS_LIMIT} points is the limit of
        getting bonus which gives you {BONUS_POINTS}
        points more.  */}
    </Text>
    <Text style={style.text}>Good luck, {playerName}!</Text>
    <Pressable style={style.button} onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
      <Text style={style.buttonText}>PLAY</Text>
    </Pressable>
  </>
  }
  </View>
  )
}