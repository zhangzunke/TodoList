import React from "react";
export default class TodoFooter extends React.Component{
    //handle all check and uncheck
    handlerAllState(event){
       this.props.changeTodoState(null,event.target.checked, true);
    }
    //bind click and clear the task which task state is complete
    handlerClick(){
        this.props.clearDone();
    }
    render(){
        return(
            <div className="clearfix todo-footer">
                 <input checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="f1"/>
                 <span className="f1">{this.props.todoDoneCount}Completed / {this.props.todoCount}Total</span>
                 <button onClick={this.handlerClick.bind(this)} className="fr">Clear has Completed</button>
            </div>
        )
    }
}