import React, {Component} from "react";
import getAns from "./DataFunction";
import axios from "axios";
import InputMenu from "./InputMenu";
export default class InputTxt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['...'],
            name: '',
            ins_time: '',
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.toggleText = this.handleChange1.bind(this);
        this.clearField = this.clearField.bind(this);

        this.onInsert = this.onInsert.bind(this);
        this.onDelete = this.onDelete.bind(this)
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
        this.state.items.push();
        this.setState({items: this.state.items});
       axios.post('http://127.0.0.1:8000/events/api/', this.state)
            .then(function (response) {
                console.log(response.data)
            });

        getAns().then(response => {
            console.log(response.data);
            this.setState({data: response.data});

        });

    }
    clearField(event) {
        event.preventDefault();
        this.setState({name: '', ins_time:''});
    }

    onDelete(index,event) {
        const number = this.state.data[index].id;
        console.log(number);
        event.preventDefault()
        axios.delete('http://127.0.0.1:8000/events/api/'+ number +'/')
            .then(function (response) {
                console.log(response)
            })
        this.state.data.splice(index, number);
        this.setState({data: this.state.data})
    }

    render() {


        return (
                <div>
                        <div id="insTxtMenu">
                            <div id="insPt">Добавление нового пункта</div>
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
                                </input>

                                <p >
                                    <button id='btnOk' type="submit" form="result" onClick={this.onInsert}> OK</button>
                                    <button id="btnCansel" type="reset" form="clear" onClick={this.clearField}> Cansel
                                    </button>
                                </p>


                            </form>

                        </div>
                    <div id='tableEvents'>
                        <ul>
                            {this.state.data.map((data, index) => (

                                <p id="newPar" key={index}>
                                    <div id="checkBox" width={20} ><input type="checkBox"/></div>
                                    <div id="div_1" >{data.ins_time}</div>
                                    <div id="div_2" > </div>
                                    <div id="div_3" >{data.name}</div>
                                    <div id="cross" align="center">
                                        <div onClick={this.onDelete.bind(this, index)}>X</div>
                                    </div>
                                </p>
                            ))}
                            <br/>
                        </ul>



                    </div>
                </div>

        )
    }

}
