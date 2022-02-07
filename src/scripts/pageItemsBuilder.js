export default function pageItemsBuilder(dataset) {
  const itemsContainer = document.querySelector('.main__items');

  dataset['stock'].forEach((car) => {
    const mainItem = document.createElement('div');
    mainItem.classList.add('main__item');
    mainItem.innerHTML = `
    <img src="./${car['image']}" alt="post image" />
    <div class="main__item-content">
      <h3>
        ${car['title']}
      </h3>
      <${dataset['page_text'][randomNumber(0, 2)]['tag']}>
        ${dataset['page_text'][randomNumber(0, 2)]['content']}
      </${dataset['page_text'][randomNumber(0, 2)]['tag']}>
      <span class="item__price">${car['price_currency']} ${car['price']}</span>
      <div class="item_props">
        <span>${car['year']}</span>
        <span>${car['mileage']} ${car['mileage_measure']}</span>
        <span>${car['axle_configuration']}</span>
      </div>
    </div>
    `;

    itemsContainer.appendChild(mainItem);
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
