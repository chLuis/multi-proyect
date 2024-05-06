import React, { useEffect } from "react";
import { useState } from "react";
import ColorSelector from "../components/ColorSelector";


export default function DesingPage() {
  const [colors, setColors] = useState<string[]>([]);
  const [quantityColor, setQuantityColor] = useState<number>(0);

  const handleQuantityColor = (quantity) => {
    setQuantityColor(quantity);
  };

  console.log(quantityColor);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <section className="flex flex-col gap-4 mt-10 overflow-clip mx-4 min-h-screen">
      <header className="mb-4">
        <h2 className="text-xl font-bold text-center">Select design for your next page</h2>
      </header>
      <section>
        <div className="flex gap-2 mb-5">
          <h4>Color to choose</h4>
          <input
            type="number"
            value={quantityColor}
            onChange={(e) => handleQuantityColor(e.target.value)}
            className="w-14 text-end"
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          {Array.from({ length: quantityColor }).map((_, index) => (
            <label className="relative">
              <span className="absolute -top-3 left-3 text-xs bg-black px-2 rounded">
                Color {index + 1}
              </span>
              <ColorSelector onSelectColor={handleColorSelect} />
              {/* <input type="text" key={index} /> */}
            </label>
          ))}
        </div>
      </section>
      <section>
        <h4>Buttons</h4>
        <h2>Radio, fondos, efectos</h2>
      </section>
      <section>
        <h4>Fonts</h4>
        <h2>Title, subtitle, principal, asides, accent</h2>
      </section>
      <section>
        <h4>Others</h4>
      </section>
    </section>
  );
}
