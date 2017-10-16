import React, {Component} from "react";
import InputMenu from "./content/InputMenu";
import InputTxt from "./content/InputTxt";
import getAns from "./content/DataFunction";
import TimeMenu from "./content/TimeMenu";
import axios from "axios";
import "./styles/style.css";
import "./styles/appMotmom.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hello:true}
        this.toggleText = this.toggleText.bind(this);
    }
    toggleText() {
        this.setState({hello: !this.state.hello});

    };
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

    //Переключаем появление и исчезание окна:
  /*  toggleVisibleModal() {
        this.setState({visibleModal: !this.state.visibleModal});
    }*/

    render() {

        return (
            <div id="main">
                <InputMenu />
                <InputTxt />
                <TimeMenu />
            </div>
        );
    }


}

export default App;
