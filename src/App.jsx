import React, { useState } from 'react';
import Layer from './components/Layer';

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-white-500 p-8 text-center">
      message for JSD12

      
      <div className="mb-10">
        <input
          type="text"
          className="p-3 rounded-lg w-full max-w-xs text-black border-2"
          placeholder="ใส่ข้อความดิ๊"
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className='text-black'>Reply from secret Room</p>
      </div>
      

      {/* เริ่มสร้างกำแพงชั้นต่างๆ */}
      <div className="max-w-xl mx-auto ">
        <Layer name="Castle" color="bg-red-500">

          <Layer name="Tower" color="bg-orange-500" >

            <Layer name="Chamber" color="bg-amber-400" >

              <Layer name="Room" color="bg-emerald-500" >

                <Layer name="Hall" color="bg-cyan-500" >

                  <Layer name="Corridor" color="bg-blue-600" >

                     <div className="bg-amber-50">
                    <Layer message={message} color="bg"/>
                     </div>
 
                  </Layer>

                </Layer>

              </Layer>

            </Layer>

          </Layer>

        </Layer>

      </div>


    </div>
  );
}