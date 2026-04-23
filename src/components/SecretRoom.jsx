import App from "../App";
import { useContext } from "react";
import MessageContext from "../messageContext.jsx/MessageContext";


export default function SecretRoom(){

 const { message, setAnswer } = useContext(MessageContext);

 return(
    <div className="flex flex-col justify-center item-center bg-black w-100">
        <h1 className="text-amber-50">SecretRoom</h1>
        <p className="text-green-400">Massage from out side</p>
        <p className="text-amber-50">Waitting for a Message...</p>
        <p className="text-green-300 items-center">Reply to the <span className=" text-yellow-200 ml-2 font-bold">{message ? message : "รอดิ๊"} </span></p>
        <div className="text-black bg-amber-50">
            <input 
        type="text"
        placeholder="ตอบกลับไปข้างนอก..."
        className="text-black"
        onChange={(e) => setAnswer(e.target.value)} 
          />
            
        </div>
        <p className="text-green-400">Waitting for a Reply</p>
    </div>

  );
}