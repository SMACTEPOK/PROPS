import React, { useState } from 'react';
import { baseProduct, colorOptions, sizeOptions, addonOptions } from '../../data/configuratorData';
import { ConfiguratorGroup, ConfiguratorRadio, ConfiguratorCheckbox } from './ConfiguratorControls';

// Генератор SVG для динамічного зображення
function generateVaseImage(colorHex) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#292929" />
      <path d="M150,100 C150,100 120,180 120,250 C120,320 160,350 200,350 C240,350 280,320 280,250 C280,180 250,100 250,100 L220,100 C220,100 230,150 230,200 C230,250 200,280 200,280 C200,280 170,250 170,200 C170,150 180,100 180,100 Z" fill="${colorHex}" stroke="#ededed" stroke-width="4"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleColorChange = (color) => setSelectedColor(color);
  const handleSizeChange = (size) => setSelectedSize(size);
  
  const handleAddonChange = (addon) => {
    setSelectedAddons(prev => 
      prev.find(a => a.id === addon.id)
        ? prev.filter(a => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  // Динамічний розрахунок ціни
  const totalPrice = baseProduct.basePrice 
    + selectedColor.price 
    + selectedSize.price 
    + selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

  return (
    <div className="section">
      <h2 className="section__title">09 / Конфігуратор продукту (Індивідуальне)</h2>
      
      <div className="configurator-layout">
        {/* ЛІВА ЧАСТИНА: Прев'ю */}
        <div className="configurator-preview">
          <div className="configurator-preview__image-box">
            <img 
              src={generateVaseImage(selectedColor.hex)} 
              alt="Налаштований продукт" 
              className="configurator-preview__image" 
            />
          </div>
          <div className="configurator-preview__info">
            <h3>{baseProduct.name}</h3>
            <div className="configurator-preview__price">
              {totalPrice} грн
            </div>
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА: Контроли (Композиція) */}
        <div className="configurator-controls">
          <ConfiguratorGroup title="Колір">
            <div className="config-colors">
              {colorOptions.map(color => (
                <ConfiguratorRadio
                  key={color.id}
                  name="color"
                  label={color.name}
                  value={color.id}
                  checked={selectedColor.id === color.id}
                  onChange={() => handleColorChange(color)}
                  extra={color.price > 0 ? `+${color.price} грн` : 'Базовий'}
                />
              ))}
            </div>
          </ConfiguratorGroup>

          <ConfiguratorGroup title="Розмір (Dropdown-стиль)">
            <div className="config-sizes">
              {sizeOptions.map(size => (
                <ConfiguratorRadio
                  key={size.id}
                  name="size"
                  label={size.name}
                  value={size.id}
                  checked={selectedSize.id === size.id}
                  onChange={() => handleSizeChange(size)}
                  extra={size.price > 0 ? `+${size.price} грн` : 'Базовий'}
                />
              ))}
            </div>
          </ConfiguratorGroup>

          <ConfiguratorGroup title="Додаткові опції">
            <div className="config-addons">
              {addonOptions.map(addon => (
                <ConfiguratorCheckbox
                  key={addon.id}
                  label={addon.name}
                  checked={!!selectedAddons.find(a => a.id === addon.id)}
                  onChange={() => handleAddonChange(addon)}
                  extra={`+${addon.price} грн`}
                />
              ))}
            </div>
          </ConfiguratorGroup>
        </div>
      </div>
    </div>
  );
}
