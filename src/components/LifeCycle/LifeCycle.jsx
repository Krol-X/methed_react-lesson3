import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
  state = {
    field: 0
  };

  handler = () => {
    this.setState(state => ({field: state.field + 1}));
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
    // setInterval(() => { console.log('!') }, 5000);
    // document.addEventListener('scroll', this.handler);

    // eslint-disable-next-line react/prop-types
    // document.title = this.props.prop;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');

    // return this.state !== nextState || this.props !== nextProps;
    return true;
  }

  getSnapshotBeforeUpdate(pervProps, pervState) {
    console.log('getSnapshotBeforeUpdate');
    return window.pageYOffset;
  }

  componentDidUpdate(pervProps, pervState, snapshot) {
    console.log('componentDidUpdate');
    // window.scrollBy(0, -snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // document.removeEventListener('scroll', this.handler)
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    };
  }

  componentDidCatch(err, errInfo) {
    // sendLog(errInfo.componentStack);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1 className={style.title}>Жизненный цикл</h1>

        <div className={style.container}>
          <div>
            <h2 className={style.title}>Типы</h2>
            <ul className={style.list}>
              <li>Монтирование</li>
              <li>Обновление</li>
              <li>Размонтирование</li>
              <li>Ошибки</li>
            </ul>
          </div>

          <div className='stage'>
            <h2 className={style.title}>Этапы</h2>
            <ul className={style.list}>
              <li>Render</li>
              <li>Pre-commit</li>
              <li>Commit</li>
            </ul>
          </div>
        </div>

        <button className={style.btn}
          onClick={this.handler}>
          Клик {this.state.field}
        </button>
      </div>
    );
  }
}
