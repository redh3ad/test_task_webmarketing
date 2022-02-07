export default function pageLinksBuilder(dataset) {
  const linksContaier = document.querySelector('.header__links');

  dataset['nav'].forEach((link) => {
    const navLink = document.createElement('a');
    navLink.href = link['href'];
    navLink.innerHTML = `${link['text']}`;

    linksContaier.appendChild(navLink);
  });
}
