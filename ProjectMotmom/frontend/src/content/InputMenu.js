/*import axios from "axios";*/
import React, {Component} from "react";
/*import getAns from "./DataFunction";*/
 export default class InputMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            /*hello: true, data: []*/

        }
        /*this.toggleText = this.toggleText.bind(this);*/

    }

/*

    toggleText() {
        this.setState({hello: !this.state.hello});

    };
     onDelete(index) {
         const number = this.state.data[index].id;
         console.log(number);

         axios.delete('http://127.0.0.1:8000/events/api/'+ number +'/')
             .then(function (response) {
                 console.log(response)
             })
         this.state.data.splice(index, number);
         this.setState({data: this.state.data})
     }
*/


    render() {



        return (
            <div >
                <p id="firstText" align="center">
                    Список мероприятий <br/><br/>
                </p>
                <button id="insPosBtn" onClick={this.onClick}>Добавить позицию</button>
                {/*<ul>
                    {this.state.data.map((data, index) => (
                        <table id="newPunct" key={index}>
                            <tbody>
                            <tr>
                                <td width={20} align="center"><input type="checkBox"/></td>
                                <td width={50} align="center">{data.name}</td>
                                <td>{data.ins_time}</td>
                                <td id="cross" align="center">
                                    <div onClick={this.onDelete.bind(this, index)}>X</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    ))}

                </ul>*/}

            </div>
        )


    }
 }
