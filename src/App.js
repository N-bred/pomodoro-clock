import React, { useState, useEffect } from 'react';
import {
  Container,
  ValidateDiv,
  TitleInputContainer,
  Title,
  Main,
  InputsContainer,
  InputContainer
} from './components/styles/AppStyles';
import Input from './components/Input';
import Clock from './components/Clock';
import Button from './components/Button';
import Audios from './audioArray';

const App = () => {
  let [breakTime, setBreakTime] = useState(0);
  let [sessionTime, setSessionTime] = useState(0);
  let [showValidation, setShowValidation] = useState(false);
  let [disableInputs, setDisableInputs] = useState(false);
  let [timer, setTimer] = useState('00:00');
  let [playState, setPlayState] = useState(true);
  let [rateOfPlaying, setRateOfPlaying] = useState(0);

  useEffect(() => {
    if (breakTime < 0 || sessionTime < 0) {
      setShowValidation(true);
      setPlayState(true);
    } else {
      setShowValidation(false);
      setPlayState(false);
    }
  }, [breakTime, sessionTime]);

  useEffect(() => {
    setPlayState(true);
  }, []);

  const addTime = (e, func, time) => {
    e.preventDefault();
    func((time += 1));
  };
  const substractTime = (e, func, time) => {
    e.preventDefault();
    func((time -= 1));
  };

  const msToTime = duration => {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  const createAudio = () => {
    const audio = Audios[Math.floor(Math.random() * Audios.length)];
    const newAudio = new Audio(audio);
    newAudio.volume = 0.1;
    return newAudio;
  };

  const audioRef = createAudio();

  const playAudio = () => {
    audioRef.play();
    setPlayState(true);
  };

  const stopAudio = () => {
    audioRef.pause();
    setPlayState(false);
  };

  const timeOut = (timeTo, cb = null) => {
    setPlayState(true);
    let newTime = timeTo * 60000;
    const percent = newTime / 100;
    let i = 0;

    const rate = setInterval(() => {
      i++;
      setRateOfPlaying(i);
    }, percent);

    const interval = setInterval(() => {
      setTimer(msToTime((newTime -= 1000)));
    }, 1000);

    setTimeout(() => {
      playAudio();
      clearInterval(interval);
      clearInterval(rate);
      setDisableInputs(false);

      setTimeout(() => {
        stopAudio();
        setPlayState(false);

        if (cb) {
          cb();
        }
      }, 2000);
    }, newTime);
  };

  const start = () => {
    setDisableInputs(true);
    timeOut(sessionTime, () => {
      setDisableInputs(true);
      timeOut(breakTime);
    });
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <Main>
      <Container>
        <Title>Pomodoro Timer</Title>

        <InputsContainer>
          <InputContainer>
            <TitleInputContainer>Breaktime</TitleInputContainer>

            <Input
              addTime={e => addTime(e, setBreakTime, breakTime)}
              substractTime={e => substractTime(e, setBreakTime, breakTime)}
              time={breakTime}
              disableInputs={disableInputs}
            />
          </InputContainer>

          <InputContainer>
            <TitleInputContainer>Session Time</TitleInputContainer>
            <Input
              addTime={e => addTime(e, setSessionTime, sessionTime)}
              substractTime={e => substractTime(e, setSessionTime, sessionTime)}
              time={sessionTime}
              disableInputs={disableInputs}
            />
          </InputContainer>
        </InputsContainer>

        <ValidateDiv show={showValidation}>
          You can't susbtract time!
        </ValidateDiv>

        <Clock
          time={timer}
          start={start}
          playState={playState}
          rate={rateOfPlaying}
        />

        <Button onClick={reset}>Reset</Button>
      </Container>
    </Main>
  );
};

export default App;
