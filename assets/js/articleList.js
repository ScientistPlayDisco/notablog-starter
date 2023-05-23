const cardStack = document.querySelector('.card_stack');
const cards = Array.from(cardStack.children);

cardStack.addEventListener('mousemove', (event) => {
  const cardWidth = cards[0].offsetWidth;
  const cardHeight = cards[0].offsetHeight;
  const mouseX = event.clientX - cardStack.offsetLeft - cardWidth / 2;
  const mouseY = event.clientY - cardStack.offsetTop - cardHeight / 2;
  const maxAngle = 20;
  const maxDist = 200;

  cards.forEach((card, index) => {
    const distX = Math.min(Math.abs(mouseX - index * cardWidth), maxDist);
    const distY = Math.min(Math.abs(mouseY), maxDist);
    const angleX = -maxAngle * (distX / maxDist);
    const angleY = maxAngle * (distY / maxDist);
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg)`;
  });
});

cardStack.addEventListener('mouseleave', () => {
  cards.forEach((card) => {
    card.style.transform = '';
  });
});