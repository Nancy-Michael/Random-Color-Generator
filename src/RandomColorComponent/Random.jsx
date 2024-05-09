import React, { useEffect, useState } from 'react'

function Random() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState("#000000");


  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'f'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor);

  }

  function handleRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleRandomRGBColor();
    else handleRandomHexColor();
  }, [typeOfColor]);


  return (
    <div style={{
      background: color,
      width: "100vw",
      height: "100vh"
    }
    }>
      <button
        onClick={() => setTypeOfColor('hex')}
      >Create Hex Color</button>
      <button
        onClick={() => setTypeOfColor('rgb')}
      >Create RGB Color</button>
      <button
        onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRGBColor}
      >Generate random Color</button>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: '60px',
        marginTop: '50px'
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default Random
