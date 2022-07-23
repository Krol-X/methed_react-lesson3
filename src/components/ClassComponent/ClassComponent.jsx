import React from 'react';
import PropTypes from 'prop-types';
import style from './ClassComponent.module.css';

const getRandomInt = (a, b) =>
  Math.floor(Math.random() * (b + 1 - a) + a);

export class ClassComponent extends React.Component {
  state = {
    userNumber: '',
    info: `Введите число`,
    randomNumber:
      getRandomInt(this.props.min, this.props.max),
    isGuess: false,
    tryCount: 0
  };

  resetRandom = () => {
    this.setState({
      info: `Введите число`,
      randomNumber:
        getRandomInt(this.props.min, this.props.max),
      isGuess: false,
      tryCount: 0
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userNumber = this.state.userNumber;

    if (this.state.isGuess) {
      this.resetRandom();
    } else {
      this.setState((state) => {
        const newState = {
          tryCount: state.tryCount + 1,
          info: `Введите число`,
          userNumber: ''
        };

        if (!!userNumber) {
          if (userNumber > state.randomNumber) {
            newState.info = `${userNumber} больше заданного`;
          } else
          if (userNumber < state.randomNumber) {
            newState.info = `${userNumber} меньше заданного`;
          } else {
            newState.info =
              `Вы угадали число! Количество попыток: ${newState.tryCount}`;
            newState.isGuess = true;
          }
        }
        console.log(newState.tryCount);
        return newState;
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      userNumber: e.target.value
    });
  };

  render() {
    const isGuess = this.state.isGuess;
    const buttonText = ['Угадать', 'Сыграть ещё'];

    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.info}</p>
        <form className={style.form}
          onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input disabled={isGuess} className={style.input}
            type='number' id='user_number'
            onChange={this.handleChange}
            value={this.state.userNumber}
          />
          <button className={style.btn}>{buttonText[+isGuess]}</button>
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};
