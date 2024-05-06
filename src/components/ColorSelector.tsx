import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

interface ColorSelectorProps {
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ onSelectColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  const handleColorSelect = () => {
    onSelectColor(selectedColor);
    setDisplayColorPicker(false);
  };

  console.log(selectedColor);
  return (
    <div>
      <div
      style={{
        backgroundColor: selectedColor
      }}
        className={`min-w-22 w-22 min-h-4 h-4`}
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
      />
      <input type="text" maxLength={9} onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor} />
      {displayColorPicker ? (
        <div style={{ position: "absolute", zIndex: 2 }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={() => setDisplayColorPicker(false)}
          />
          <ChromePicker color={selectedColor} onChange={handleColorChange} />
          <button onClick={handleColorSelect}>Select</button>
        </div>
      ) : null}
    </div>
  );
};

export default ColorSelector;
