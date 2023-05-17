const footer = document.querySelector('footer');

const year = new Date().getFullYear();

const footerText = `© ${year} - Moe's Burger - All rights reserved`;

if (footer) {
  footer.innerText = footerText;
}
