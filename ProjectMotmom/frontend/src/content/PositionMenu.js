import React,{Component} from "react";

export default class PositionMenu extends Component{

   constructor() {
        super();
        this.state = {items: []};
    }
    //Добавляем в конец списка новый пункт:
    addItem(event) {
        //Добавляем новый элемент в массив:
        this.state.items.push(this.state.value);
        //Применяем изменение:
        this.setState({items: [].concat(this.state.items)});
        //Отменяем отправку формы:
        event.preventDefault();
    }

    deleteItem(index) {
        this.state.items.splice(index, 1);
        this.setState({items: this.state.items});
    }
    render() {
                              //Формируем набор из тегов :
                               const list = this.state.items.map((item, index) => {
                                     return(
                                            <table id="newPunct" key={index}>

                                            <td width={20} align="center"><input type="checkBox"/> </td>
                                            <td width={50} align="center"> </td>
                                            <td>{item}</td>
                                            <td id="cross"align="center">
                                                <div   onClick={this.deleteItem.bind(this, index)}>X</div>
                                            </td>

                                          </table>
                                     );
                               });
        return (
            <div>

                <ul>
                    {list}
                </ul>

                <form onSubmit={this.addItem.bind(this)}>
                    <input value= {this.state.value} /> <br/>
                    <p><input type="submit" value="OK" /></p>
                </form>
            </div>

        )
    }

}