import React, {Component} from "react";
import {createGlobalStyle} from "styled-components";

//App에 state값을 알려주기 위한 용도.
interface IState {
    counter: number;
}

//IState 상속 받아서 state값을 알아냄
class App extends Component<{}, IState> {
    //stat선언
    state = {
        counter: 0
    }

    //render가 어플리케이션 실행할때 실행되는 것
    render() {
        //this로 state 값 받아서 사용
        const {counter} = this.state;
        //render가 실행되고 return값으로 html 객체를 리턴해줌.
        return <div>{counter}
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }

    add = () => {
        //prev는 값을 넘겨주기 위한 변수명
        this.setState(prev => {
            return {
                counter: prev.counter + 1
            }
        })
    }

    minus = () => {
        //prev는 값을 넘겨주기 위한 변수명
        this.setState(prev => {
            return {
                counter: prev.counter - 1
            }
        })
    }
}

export default App;