import MessageContext from "./MessageContext"; 
import { useState } from "react";


const MessageProvider = ({children}) => {
    const [message, setMessage] = useState("");
    const [Answer,setAnswer] = useState("")

    return(
        
            <MessageContext.Provider value={{ message, setMessage, Answer, setAnswer }}>
                {children}
            </MessageContext.Provider>
    );
};


export default MessageProvider;  