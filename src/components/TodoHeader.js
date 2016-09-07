import React from "react";
class TodoHeader extends React.Component{
    //bind key down, add new task
    handlerKeyUp(event){
        console.log("key up");
        if(event.keyCode === 13){
            let value = event.target.value
            if(!value) return false;

            let newTodoItem ={
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }
    render(){
        return(
            <div className="panel-header">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
            </div>
        )
    }
}
export default TodoHeader;
