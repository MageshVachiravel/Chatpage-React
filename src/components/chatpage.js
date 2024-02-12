const person = [
    {
        name:"Jessica Koel",
        message:"hey joe,i here to help you out please",
        time:"11:26",
        img:`https://ui-avatars.com/api/?name=JessicaKoel&background=0D8ABC&color=fff`
    },
    {
        name:"Bolger",
        message:"I will send all the document by tonight",
        time:"10:26",
        img:`https://ui-avatars.com/api/?name=Bolger&background=0D8ABC&color=fff`
    },
    {
        name:"Tamaara Suiale",
        message:"are you to business trip next week",
        time:"7:26",
        img:`https://ui-avatars.com/api/?name=Tamaara Suiale&background=0D8ABC&color=fff`
    },
    {
        name:"Sam Nielson",
        message:"i suggest you to start a business soon",
        time:"4:26",
        img:`https://ui-avatars.com/api/?name=Sam Nielson&background=0D8ABC&color=fff`
    },
    {
        name:"Caroline Nexon",
        message:"we need to start a  new research center",
        time:"6:26",
        img:`https://ui-avatars.com/api/?name=Caroline Nexon&background=0D8ABC&color=fff`
    },
    {
        name:"Partick Kooler",
        message:"we need to start a  new research center",
        time:"9:26",
        img:`https://ui-avatars.com/api/?name=Partick Kooler&background=0D8ABC&color=fff`
    },
    {
        name:"Partick Kooler",
        message:"we need to start a  new research center",
        time:"9:26",
        img:`https://ui-avatars.com/api/?name=Partick Kooler&background=0D8ABC&color=fff`
    }

]



function Chatpage(props){
    return (
        <div class="chatpage">
            <div class="chat-box">
                <img src={props.img} alt=""></img>
                <div class="name">
                    <h3>{props.name}</h3>
                    <p>{props.msg}</p>
                </div>
                <div class="time">
                    <p style={{marginBottom:"5px"}}>{props.time}</p>
                    <i class="fa-solid fa-star" style={{color: "#68d46a"}}></i>
                </div>
            </div>
        </div>
    )
}

export default Chatpage
export {person}