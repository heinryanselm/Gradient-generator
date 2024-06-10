import { useState } from 'react';

export default function Home() {
  // State to store the colors used in the gradient
  const [colors, setColors] = useState(['#ff6714', '#9af9dd']);
  // State to store the angle of the gradient
  const [angle, setAngle] = useState(60);

  // Function to handle color changes
  const handleColorChange = (index, color) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  // Function to add a new color to the gradient
  const handleAddColor = () => {
    setColors([...colors, '#ffffff']);
  };

  // Function to generate the CSS gradient string
  const generateGradient = () => {
    return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
  };

  // Function to copy the generated CSS gradient to the clipboard
  const handleCopyCSS = () => {
    const css = `background: ${generateGradient()};`;
    navigator.clipboard.writeText(css);
  };

  return (
    <div
      // Full-screen container with flex layout to center content
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: generateGradient(), 
      }}
    >
      <h1
        // Heading with white text color for visibility
        style={{ color: '#fff', marginBottom: '20px' }}
      >
        Coding Challenge
      </h1>
      <div
        // Container for color inputs and add button
        style={{ marginBottom: '20px' }}
      >
        {colors.map((color, index) => (
          <input
            key={index} 
            type="color" 
            value={color} 
            onChange={(e) => handleColorChange(index, e.target.value)}
            style={{ marginRight: '10px' }} 
          />
        ))}
        <button onClick={handleAddColor}>Add new color</button> 
      </div>
      <div
        // Container for the angle input
        style={{ marginBottom: '20px' }}
      >
        <label
          style={{ color: '#fff' }}
        >
          Angle ° :
        </label>
        <input
          type="number" 
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
          style={{ marginLeft: '10px' }} 
        />
      </div>
      <button onClick={handleCopyCSS}>Copy CSS code</button> 
    </div>
  );
}
