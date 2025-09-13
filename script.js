// Elements
const textInput = document.getElementById('customText');
const textPreview = document.getElementById('customTextPreview');
const sizeRange = document.getElementById('sizeRange');
const colorRow = document.getElementById('colorRow');
const productImage = document.getElementById('productImage');
const propColor = document.getElementById('propColor');
const propText  = document.getElementById('propText');
const propSize  = document.getElementById('propSize');
const propPos   = document.getElementById('propPos');
const alignBtns = document.querySelectorAll('.align-btn');
const addToCart = document.getElementById('addToCart');

// INIT defaults
let activeColorBtn = colorRow.querySelector('.color-dot');
if (activeColorBtn) activeColorBtn.classList.add('is-active');

// Live text
textInput.addEventListener('input', () => {
  const v = textInput.value || 'YOUR TEXT';
  textPreview.textContent = v;
  propText.value = v;
});

// Text size
sizeRange.addEventListener('input', () => {
  textPreview.style.fontSize = `${sizeRange.value}px`;
  propSize.value = sizeRange.value;
});

// Color selection
colorRow.addEventListener('click', (e) => {
  const btn = e.target.closest('.color-dot');
  if (!btn) return;
  if (activeColorBtn) activeColorBtn.classList.remove('is-active');
  activeColorBtn = btn;
  btn.classList.add('is-active');
  const color = btn.dataset.color;
  // Поменяем акцент: рамка у изображения
  productImage.style.boxShadow = `0 0 0 4px ${color}66`;
  productImage.style.border = `1px solid ${color}`;
  propColor.value = color;
});

// Align controls
alignBtns.forEach(b => {
  b.addEventListener('click', () => {
    alignBtns.forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    const pos = b.dataset.align;
    propPos.value = pos;

    if (pos === 'top') {
      textPreview.style.top = '18%';
    } else if (pos === 'center') {
      textPreview.style.top = '50%';
    } else {
      textPreview.style.top = '82%';
    }
  });
});

// Demo Add to Cart
addToCart.addEventListener('click', () => {
  // В реальном Shopify это должна быть форма Add to Cart.
  // Здесь показываем демо-подтверждение.
  const msg = [
    `Added to cart (demo):`,
    `Text: ${propText.value}`,
    `Color: ${propColor.value}`,
    `Size: ${propSize.value}px`,
    `Position: ${propPos.value}`
  ].join('\n');
  alert(msg);
});
