import Input from "./components/input"
import Chatpage from "./components/chatpage"
import { person } from "./components/chatpage"


function App(){
    return (
       <div className="chat-container">
        <Input></Input>
        {
            person.map((items)=>{
                return(
                    <Chatpage name={items.name} msg={items.message} time={items.time} img={items.img}></Chatpage>
                )
            })
        }
       </div>
    )
}

export default App