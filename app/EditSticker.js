import React from 'react';
import './EditSticker.css';

const stickers = [
    'apple.png',
    'sparkleheart.png',
    'egg.png',
    'basil.png',
    'sun.png',
    'flame.png',
    'pinkflower.png',
    'tortl.png',
    'pumpking.png',
    'bat.png'
    // Add more sticker image paths
];

function EditSticker() {

  const handleDragStart = (event, sticker) => {
    event.dataTransfer.setData('sticker', sticker);
  };

  return (
    <div className="stickerContainer">
      {stickers.map((sticker, index) => (
        <img
          key={index}
          src={sticker}
          alt={`sticker-${index}`}
          className="stickers"
          draggable
          onDragStart={(event) => handleDragStart(event, sticker)}
        />
      ))}
    </div>
  );
}

export default EditSticker;
