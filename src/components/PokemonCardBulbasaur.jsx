import React from "react";
import { useEffect, useState } from "react";

function PokemonBulbasaur (){
  const [finalData, setfinalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pokemonData = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
        const data = await response.json();

        const detailedAbilities = await Promise.all(
          data.abilities.map(async (item) => {
            const resAbility = await fetch(item.ability.url);
            const abilityInfo = await resAbility.json();

            return {
              name: item.ability.name,
              description: abilityInfo.effect_entries.find(
                (entry) => entry.language.name === "en",
              )?.short_effect,
            };
          }), // <-- ปิด map ตรงนี้
        ); // <-- ปิด Promise.all ตรงนี้

        setfinalData({
          name: data.name,
          image: data.sprites.front_default,
          abilities: detailedAbilities,
        });


        //  ดึงข้อมูลสถานที่เจอ (Encounters)  //location-------------------------
        const resEncounter = await fetch(
          "https://pokeapi.co/api/v2/pokemon/1/encounters",
        );
        const encounterData = await resEncounter.json();

        //  กรองเอาแค่ชื่อสถานที่ (เลือก 3 ที่แรก)
        const locations = encounterData.slice(0, 3).map((item) => {
          // เปลี่ยนชื่อจาก "pallet-town-area" เป็น "Pallet Town Area" ให้สวยขึ้น
          return item.location_area.name.replace(/-/g, " ");
        });

        // 3. เก็บลง State (เพิ่ม field locations เข้าไป)
        setfinalData({
          name: data.name,
          image: data.sprites.front_default,
          abilities: detailedAbilities,
          locations: locations, // ข้อมูลสถานที่ที่เพิ่มมา
        });



      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    pokemonData(); // อย่าลืมเรียกใช้ฟังก์ชัน!
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="">
      {finalData && (
        <div className="bg-white p-6 rounded-2xl shadow-lg h-134 max-h-full max-w-sm w-200 text-center">
          <img
            className="mx-auto w-32 h-32"
            src={finalData.image}
            alt={finalData.name}
          />
          <h1 className="text-3xl font-bold capitalize mt-4">
            {finalData.name}
          </h1>
          <div className="mt-6 text-left">
            <h3 className="font-bold border-b pb-2 mb-2 text-blue-600">
              ความสามารถพิเศษ:
            </h3>
            {finalData.abilities.map((ab, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold capitalize text-gray-800">
                  ✨ {ab.name}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {ab.description || "ไม่มีคำอธิบาย"}
                </p>
              </div>
            ))}
<div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
        <h4 className="font-bold text-green-700 text-sm mb-2">
          📍 สถานที่ที่พบ:
        </h4>
        {finalData.locations.length > 0 ? (
          <ul className="text-xs text-green-800 list-disc ml-4">
            {finalData.locations.map((loc, index) => (
              <li key={index} className="capitalize">
                {loc}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-gray-400 italic">ไม่พบข้อมูลสถานที่</p>
        )}
      </div>

          </div>
        </div>
      )}
     
      
    </div>
  );
}

export default PokemonBulbasaur;