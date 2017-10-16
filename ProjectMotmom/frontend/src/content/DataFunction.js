import axios from "axios";

function getAns() {
    console.log("Sending a GET API Call !!!");
   return axios.get('http://127.0.0.1:8000/events/api/')
        /*.then(res => {
           //console.log(res.data);
           //this.setState({data: res.data});
       })
        .then(response => {

    })*/


}
export default getAns;
