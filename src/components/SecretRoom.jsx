import App from "../App";


export default function SecretRoom({message, setAnswer}){
 return(
    <div className="flex flex-col justify-center item-center bg-black">
        <h1 className="text-amber-50">SecretRoom</h1>
        <p className="text-green-400">Massage from out side</p>
        <p className="text-amber-50">Waitting for a Message...</p>
        <p className="text-green-300">Reply to the <span className=" text-yellow-200 ml-2 font-bold">
    {message ? message : "Waiting for a reply"} 
  </span></p>
        <div className="text-black bg-amber-50">
            <input 
        type="text"
        placeholder="ตอบกลับไปข้างนอก..."
        className="text-black"
        onChange={(e) => setAnswer(e.target.value)} // พิมพ์ปุ๊บ setAnswer ทำงานปั๊บ
          />
            
        </div>
        <p className="text-green-400">Waitting for a Reply</p>
    </div>

  );
}