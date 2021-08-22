import axios from "axios";
import { Component, ReactDOM } from "react"
import $ from 'jquery';

export default class Users extends Component{
    constructor(props){
        super(props);
           
    }
    state = {
        users: []
    }
    getUsers = async() =>{
       const res = await axios.get('http://localhost:8080/api/users');
       this.setState({users: res.data});
    }
    componentDidMount(){
        this.getUsers();
    }
    componentDidUpdate(){
        this.getUsers();
        this.Update();
    }
    render(){
        return(
            <div className="users container">
                <div className="containe row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                this.state.users != 0?
                              this.state.users.map(e=>(
                                  <div className="d-flex container">
                                  <li className="itemsu list-group-item" key={e.id}>{e.name}</li>
                                  <li className="itemsu list-group-item">{e.number}</li>
                                  </div>
                              ))
                              :<div className="err container">
                                  <li className="items list-group-item">Not Found Elements</li>
                                   <div className="contenimg m-5">
                                      <img src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/404-pages_featured@2x.png"/>
                                  </div>
                              </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    Update = () =>{
        $(".err > .contenimg").css("border", "2px solid #E8E8E8");
        $(".err > .contenimg").css("width","100%");
        $(".err > .contenimg").css("height","500px");
        $(".err > .contenimg > img").addClass("imgs");
        $(".err > .items").css("margin-left","50px");
        $(".users").css("width","100%");
        $(".containe").css("width","100%");
        $(".containe > .col-md-4").css("width","80%");
        $(".containe > .col-md-4 > ul").css("width","100%");
        $(".containe > .col-md-4 > ul > .err > .items").css("width","100%");
        $(".containe > .col-md-4 > ul > .err > .items").css("background-color","#FF0000");
        $(".containe > .col-md-4 > ul > .err > .items").css("padding","10px 50px");
        setInterval(function(){
            $(".containe > .col-md-4 > ul > .err > .items").addClass("bg-danger");
        },1000);
        $(".itemsu").css("width","30%");
        $(".itemsu").css("background","#0055A0A1");
        $(".itemsu").css("border","1px solid #0122AF");
    }
}