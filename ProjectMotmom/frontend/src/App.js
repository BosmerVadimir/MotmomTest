import React, {Component} from "react";
import InputMenu from "./content/InputMenu";
import InputTxt from "./content/InputTxt";
import PositionMenu from "./content/PositionMenu";
import TimeMenu from "./content/TimeMenu";
import "./styles/style.css";
import "./styles/appMotmom.css";


class App extends Component {
    constructor(props) {
        super(props);

       /* visibleModal:false;*/
       /* this.toggleVisibleModal = this.toggleVisibleModal.bind(this);*/

    }

    //Переключаем появление и исчезание окна:
  /*  toggleVisibleModal() {
        this.setState({visibleModal: !this.state.visibleModal});
    }*/

    render() {
        return (
            <div>
                <InputMenu /*toggleVisibleModal = {this.toggleVisibleModal}*/ />
                 <div> <InputTxt /></div>

               <TimeMenu/>
               <PositionMenu/>


                {/*<button type="insert" onClick={this.onInsert}>Insert</button>*/}

            </div>
        );
    }


}

export default App;
