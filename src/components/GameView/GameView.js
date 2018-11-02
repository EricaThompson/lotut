import React, { Component } from 'react';
import '../Registration/index.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';


class GameView extends Component {

    state = {
        username: '',
        password: '',
        result: []
    }

    

    componentDidMount(){
        // const user = {
        //     username: this.state.username,
        //     password: this.state.password
        // }


        const header = {
            headers: {
                authorization: `TOKEN ${localStorage.getItem('key')}`
            }
        }
        axios
            .get('https://lotut.herokuapp.com/api/adv/init/', header)
            .then(res => {
                console.log(res.data.name);
                this.setState({result: res});

                localStorage.removeItem('key');
                localStorage.setItem('key', res.data.key);
                // if (this.state.password != ''){
                this.props.history.push('/game')
            //}
            })
            .catch(err => {
                console.log(err, 'err')
                this.props.history.push('/register')
    });

    


    }

    
    
    
    render() {
        return (
            <form className="regForm">
                <div className="regOverlay">
                    <div className="mainScreen">
                        Main Screen
                        <div className="textOutput">
                        {this.state.textOutput}
                        </div>
                        <div className="userInput">
                        User input
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default GameView;