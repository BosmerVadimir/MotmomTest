import axios from "axios";
import React, {Component} from "react";

 export default class InputMenu extends Component {

//создаем кнопку добавить позицию, при нажатии, текст меняется на вернуться.
    constructor(props) {
        super(props);
        this.state = {
            hello: true, data: []

        }

        this.toggleText = this.toggleText.bind(this);

    }

    toggleText() {
        this.setState({hello: !this.state.hello});
        /*this.props.toggleVisibleModal();*/
        console.log("Sending a GET API Call !!!");

        axios.get('http://127.0.0.1:8000/events/api/')
            .then(res => {
                console.log(res.data);
                this.setState({data: res.data});
            }).then(response => {



        })
            .catch(err => {
                // Возьмите здесь ошибку. Например. используйте this.setState (), чтобы отобразить сообщение об ошибке.
            })
    };


    render() {





        return (
            <div >
                <p id="mainText">
                    Список мероприятий <br/><br/>
                    <button id="insPosBtn" onClick={this.toggleText}>
                        {this.state.hello ? "Добавить позицию" : "Вернуться"}
                    </button>
                </p>
                <ul>
                    {this.state.data.map((data, index) => (
                        <li key={index}>
                            {data.name} {data.ins_time}
                        </li>
                    ))}

                </ul>

            </div>
        )


    }
 }
