import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
import {ratioH} from '../../utils/utils';
// import { Audio } from 'expo-av';
const Game3 = ({navigation}) => {
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '붉은 수건',
      top: 530,
      left: 400,
      selected: false,
    },
    {
      content: '검은 머리',
      top: 530,
      left: 630,
      selected: false,
    },
    {
      content: '휴대폰',
      top: 530,
      left: 860,
      selected: false,
    },
  ]);
  const handleOneChoice = index => {
    if (anwsOptions[index].selected) return;
    const newAnsOptions = anwsOptions.map((ans, idx) => {
      return {
        ...ans,
        selected: index === idx,
      };
    });
    setAnwsOptions(newAnsOptions);
  };

  return (
    <ListeningBackground
      title="소음 훈련"
      question="소음 속 단어를 듣고 정답을 골라보자!"
      navigation={navigation}
      leftPosContent="35%"
      destination="ListeningGame4">
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity style={styles.audio} onPress={async () => {}}>
          <Image
            style={{width: ratioH(165), height: ratioH(165)}}
            resizeMode="cover"
            source={require('../../../assets/images/core/Audio.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <AnswerButton
            customWidth={300}
            content={anwsOptions[0].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(0)}
            isUniqueSelected={anwsOptions[0].selected}
            style={styles.answerButton}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
          <AnswerButton
            content={anwsOptions[1].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(1)}
            isUniqueSelected={anwsOptions[1].selected}
            style={{...styles.answerButton, marginLeft: 16, marginRight: 12}}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
          <AnswerButton
            content={anwsOptions[2].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(2)}
            isUniqueSelected={anwsOptions[2].selected}
            style={styles.answerButton}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    </ListeningBackground>
  );
};

const styles = StyleSheet.create({
  audio: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  answerButton: {
    position: 'relative',
    width: 199,
    height: ratioH(88),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    width: 'auto',
  },
  buttonStyle: {
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
    width: 199,
  },
  textStyle: {
    fontSize: 36,
    lineHeight: null,
    includeFontPadding: false,
  },
});

export default Game3;
