import React, {Component} from "react";
import axios from "axios";
export default class InputTxt extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', ins_time: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.onInsert = this.onInsert.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleChange(event) {

        this.setState({name: event.target.value});
        event.preventDefault();

        console.log(this.state.name)

    }

    handleChange1(event) {
        event.preventDefault();
        this.setState({ins_time: event.target.value});

        console.log(this.state.ins_time);
    }

    onClick() {
        console.log("Sending a GET API Call 33333333333333!!!");
        axios.get('http://127.0.0.1:8000/events/api/')
            .then(res => {
                console.log(res.data);
            }).then(response => {
        })
    }

    onInsert() {
        console.log(this.state);
        axios.post('http://127.0.0.1:8000/events/api/', this.state)
            .then(function (response) {
                console.log(response)
            })
    }

    onDelete() {
        console.log(this.state);
        axios.delete('http://127.0.0.1:8000/events/api/8/')
            .then(function (response) {
                console.log(response)
            })
    }



    render() {


        return (
            <div id="insTxtMenu">

                <form id="result">
                    <p id="txtName"> Название</p>

                    <input id="inputIns1"
                           type="text"
                           value={this.state.name}
                           onChange={this.handleChange}
                           placeholder="Введите событие"
                           required>
                    </input>

                    <p id="txtTime"> Время </p>

                    <input id="inputIns2"
                           type="text"
                           value={this.state.ins_time}
                           onChange={this.handleChange1}
                           placeholder="Введите время"
                           required>

                    </input><br/><br/>

                    <div>

                        <button type="insert" style={{marginTop: '20px'}} form="result" onClick={this.onInsert}>Добавить</button>
                        <button style={{marginTop: '20px'}} form="result" onClick={this.onDelete}>Удалить</button>
                    </div>
                    <button type="button" onClick={this.onClick}>Send GET /products</button>
                </form>

             </div>

        )
    }

}
