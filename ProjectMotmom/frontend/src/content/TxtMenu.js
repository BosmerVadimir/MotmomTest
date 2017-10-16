import React, {Component} from "react";

export default class TextMenu extends Component {

    constructor() {
        super();
        this.state = {items: [], value: '', time: ''};
    }


    //Добавляем в конец списка новый пункт:
    addItem(event) {

        //Добавляем новый элемент в массив:
        this.state.items.push(this.state.value);

        //Применяем изменение:
        this.setState({items: this.state.items});
        //Отменяем отправку формы:
        event.preventDefault();
    }

    //Записываем value инпута в this.state.value:
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //Удаляем элемент массива:
    deleteItem(num) {
        this.state.items.splice(num, 1);
        this.setState({items: this.state.items});
    }

    addTime(event) {

        this.setState({time: event.target.time});
        event.preventDefault();
    }

    clearField(event) {
        event.preventDefault();

        this.setState({value: ''});
    }

    render() {


        return ( <div>

                <div id="insTxtMenu">
                    <div id="insPt">Добавление нового пункта</div>

                    <div id="inputs">
                        <p id="txtName">Название</p>

                        <input id="inputIns1"
                               type="text"
                               value={this.state.value}
                               onChange={this.handleChange.bind(this)}
                               placeholder="Введите событие">
                        </input>

                        <p id="txtTime"> Время </p>

                        <input id="inputIns2"
                               type="text"
                               value={this.state.time}
                               onChange={this.addTime.bind(this)}
                               placeholder="Введите время">
                        </input>


                        <p id="btns">
                            <button type="submit" form="result"> OK</button>
                            <button type="reset" form="clear"> Cansel</button>
                        </p>


                    </div>

                </div>
        )
    }
}


