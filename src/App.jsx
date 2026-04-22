import React, { useState } from 'react';
import Layer from './components/Layer';
import SecretRoom from './components/SecretRoom';
import PokemonDitto from './components/PokemonCardDitto';
import PokemonBulbasaur from './components/PokemonCardBulbasaur';

export default function App() {
  const [message, setMessage] = useState("");
  const [Answer,setAnswer] = useState("")

  return (
    <div className="w-full flex-1 flex flex-col h-full bg-white-500  text-center">
      message for JSD12

      
      <div className="mb-10">
        <input
          type="text"
          className="p-3 rounded-lg w-full max-w-xs text-black border-2"
          placeholder="ใส่ข้อความดิ๊"
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className='text-black'>Reply from secret Room</p>
        <p className="text-green-300">Reply to the <span className=" text-yellow-200 ml-2 font-bold">
    {Answer ? Answer : "Waiting for a reply"}
  </span></p>
      </div>
      

      {/* เริ่มสร้างกำแพงชั้นต่างๆ */}
      <div className="w-screen h-full ">
        <Layer name="Castle" color="bg-red-500">

          <Layer name="Tower" color="bg-orange-500" >

            <Layer name="Chamber" color="bg-amber-400 " message={message ? message : "รออยู่นะ"} >

              <Layer name="Room" color="bg-emerald-500" >

                <Layer name="Hall" color="bg-cyan-500" >

                  <Layer name="Corridor" color="bg-blue-600" >
                    <Layer name="Nook" color="bg-blue-300" >


                     
                    <SecretRoom  message={message} setAnswer={setAnswer}/>
                     
                     

                    </Layer>
                  </Layer>

                </Layer>

              </Layer>

            </Layer>

          </Layer>

        </Layer>

      </div>

<div className="flex flex-row w-screen gap-1">
  <PokemonDitto />
  <PokemonBulbasaur/>

  
  
</div>

    </div>
   
   
   
    
  );
}