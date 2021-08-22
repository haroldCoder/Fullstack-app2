import { Component, ReactDOM } from "react";
import $ from 'jquery';

export default class Notes extends Component{
    componentDidMount(){
        this.Update(); 
    }
    state = {
      counts: 0
    };
    Target = () =>{
            return(
            <div className="card border-2 border-primary">
                  <i>type of note</i>
                  <input type="text"/>
                  <i>note write</i>
                  <input type="text" />
                  <i>inportant</i>
                  <input type="number" />
                  <footer className="conf d-flex">
                  <div className="btn btn-primary">add</div>
                  </footer>
               </div>
            );
    }
    render(){
        return(
            <div className="conteni">
                <section className="count bg-primary d-flex">
                  <h5>Notes</h5><h5 className="h5 text-light">{this.state.counts}</h5>
                </section>
                <div className="nots container-fluid d-flex">
                  <this.Target/>
                  <this.Target/>
                </div>
            </div>
        );
    }
    Update = () =>{
        $(".conteni").css("heiht","auto")
        $(".nots").css("width","100%");
        $(".nots").css("height","auto");
        $(".nots > .card").css("margin","0px 30px");
        $(".nots > .card > input").css("margin","10px 10px");
        $(".nots > .card > i").css("font-size","15px");
        $(".nots > .card > i").css("color","#000");
        $(".conf").css("justify-content","flex-end");
        $(".card > .conf > .btn").css("width","30%");
        $(".card > .conf > .btn").css("font-size","15px");
        $(".card > .conf > .btn").css("margin","6.5px 6.5px");
        $(".count").css("width","10%");
        $(".count").css("border-radius","8px");
        $(".count").css("margin","7px 0px 50px 20px");
        $(".count").css("justify-content","space-around");
    }
}