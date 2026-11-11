import React, { useState } from 'react';
import { mockProducts } from '../../data/mockProducts';
import ProductCard from '../ProductCard/ProductCard';

export function ProductCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('none');
  const [viewMode, setViewMode] = useState('grid');
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Логіка фільтрації
  let filtered = mockProducts.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'all' || p.category === category)
  );

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="section">
      <h2 className="section__title">04 / Каталог товарів</h2>
      
      <div className="catalog-controls">
        <input 
          type="text" 
          placeholder="Пошук..." 
          value={search} 
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="input-field"
        />
        <select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }} className="input-field">
          <option value="all">Всі категорії</option>
          <option value="Кераміка">Кераміка</option>
          <option value="Текстиль">Текстиль</option>
          <option value="Дерево">Дерево</option>
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="input-field">
          <option value="none">Без сортування</option>
          <option value="price-asc">Ціна (від дешевих)</option>
          <option value="price-desc">Ціна (від дорогих)</option>
          <option value="name">За назвою</option>
        </select>
        <button className="btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          {viewMode === 'grid' ? 'Список' : 'Сітка'}
        </button>
      </div>

      {displayed.length === 0 ? (
        <div className="empty-state">Нічого не знайдено за вашим запитом.</div>
      ) : (
        <div className={viewMode === 'grid' ? 'catalog-grid' : 'catalog-list'}>
          {displayed.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="btn">← Назад</button>
          <span>Стор. {page} з {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="btn">Далі →</button>
        </div>
      )}
    </div>
  );
}
