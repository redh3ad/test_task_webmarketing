export default function pageTitleBuilder(dataset) {
  const titleContainer = document.querySelector('.container__title');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header__title');
  headerTitle.innerHTML = `${dataset['page_meta']['h1']}`;
  titleContainer.appendChild(headerTitle);
}
