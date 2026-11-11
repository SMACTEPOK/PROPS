export const baseProduct = {
  name: 'Керамічна ваза «Мінімалізм»',
  basePrice: 800,
};

export const colorOptions = [
  { id: 'terracotta', name: 'Теракота', hex: '#d96b4c', price: 0 },
  { id: 'graphite', name: 'Графіт', hex: '#333333', price: 50 },
  { id: 'bone', name: 'Слонова кістка', hex: '#e8e4db', price: 100 },
];

export const sizeOptions = [
  { id: 's', name: 'S (15 см)', price: 0 },
  { id: 'm', name: 'M (25 см)', price: 150 },
  { id: 'l', name: 'L (35 см)', price: 300 },
];

export const addonOptions = [
  { id: 'box', name: 'Подарункова коробка', price: 80 },
  { id: 'engraving', name: 'Гравіювання імені', price: 200 },
];
