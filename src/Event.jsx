import React from "react";

class EventHand extends React.Component{
constructor(){
    super();
this.state = {
    text :"",
}
}
 textChange (e) {
this.setState({text:e.target.value})
}



render(){
    return(
<>

<input type="text" onChange={this.textChange.bind(this)} />
<p>Text : {this.state.text}</p>
</>

    )
}

}
export default EventHand;