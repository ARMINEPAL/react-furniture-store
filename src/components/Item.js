import React from 'react'

export default function Item({ item, onAdd, onShowItem }) {
  return (
    <article className="item">
      <button
        type="button"
        className="item-preview"
        onClick={() => onShowItem(item)}
        aria-label={`Подробнее о товаре ${item.title}`}
      >
        <img
          src={'./img/' + item.img}
          alt={item.title}
          loading="lazy"
        />
      </button>

      <h2>{item.title}</h2>

      <p>{item.desc}</p>

      <b>{item.price}</b>

      <button
        type="button"
        className="add-to-cart"
        onClick={() => onAdd(item)}
        aria-label={`Добавить ${item.title} в корзину`}
        title="Добавить в корзину"
      >
        +
      </button>
    </article>
  )
}