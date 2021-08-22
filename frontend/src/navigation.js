import { Component, ReactDOM } from "react"
import koder from '../img/coder.png';
import { Link } from "react-router-dom";

export default class Navigation extends Component{
    render(){
        return(
            <nav className="navbar d-flex">
                <div className="container">
                <section className="title d-flex">
                    <img src={koder}/>
                    <Link className="titlep" to="/">
                        <h2>CONTACTS</h2>
                    </Link>
                </section>
                <section className="items d-flex">
                 <Link to="/users"><span>users</span></Link>
                 <Link to="/create"><span>create user</span></Link>
                 <Link to="/notes"><span>create note</span></Link>
                 <Link to="/createnotes"><span></span>notes</Link>
                </section>
                </div>
            </nav>
        );
    }
}