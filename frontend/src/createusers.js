import { Component, ReactDOM } from "react";
import axios from 'axios';
import $ from 'jquery';

export default class CreateUsers extends Component{
    constructor(props){
    super(props);
  }
    state = {
      users: [],
      username: '',
      numbers: [],
      number: ''
    }
    async componentDidMount(){
      this.getUsers();
    }
     getUsers = async() =>{
      const res = await axios.get('http://localhost:8080/api/users');
      this.setState({users: res.data});     
    }
    onChangeUsername = (e) =>{
      this.setState({username: e.target.value});
      this.getUsers();
    }
    onChangeNumer = (e) =>{
      this.setState({number: e.target.value});
    }
    onsubmitUsername = async e =>{
      if(this.state.username != '' && this.state.number != ''){
        e.preventDefault()
      await axios.post('http://localhost:8080/api/users',{
        username: this.state.username, number: this.state.number
      });
      this.setState({username: ''});
      this.setState({number: ''});
      this.getUsers();
      }
      else{
        alert("filds all fiels");
      }
    }
    render(){
        return(
            <div className="contain2 row">
              <div className="col-md-4">
                <div className="card card-body">
                  <h3>Create new user</h3>
                  <form onSubmit={this.onsubmitUsername} className="formuser">
                    <div className="form-group">
                      <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                      <input type="number" className="form-control" value={this.state.number} onChange={this.onChangeNumer}/>
                    </div>
                    <button type="submit" className="btn btn-primary">save</button>
                  </form>
                </div>
              </div>
              <div className="col-md-8">
                  <ul className="list-group">
                    {
                        this.state.users.map(e=>
                          <div className="conten d-flex">
                            <li className="out list-group-item list-group-item-action" key={e.id}>{e.name}</li>
                            <span className="remove material-icons" onClick={()=>this.Update(e.name)}>delete</span>
                            </div>
                            )
                    }
                    {
                      
                  }
                  </ul>
              </div>
            </div>
        );
    }
    Update = async(name) =>{
      axios.delete('http://localhost:8080/api/users',{
        "name": name
      })
      this.getUsers()
}
}