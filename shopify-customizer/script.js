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
  document.querySelectorAll('.color-dot').forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const color = btn.dataset.color;
  productImage.style.border = `3px solid ${color}`;
  propColor.value = color;
});

// Align controls
alignBtns.forEach(b => {
  b.addEventListener('click', () => {
    alignBtns.forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    const pos = b.dataset.align;
    propPos.value = pos;

    if (pos === 'top') textPreview.style.top = '20%';
    if (pos === 'center') textPreview.style.top = '50%';
    if (pos === 'bottom') textPreview.style.top = '80%';
  });
});

// Demo Add to Cart
addToCart.addEventListener('click', () => {
  alert(`Demo Add to Cart:\nText: ${propText.value}\nColor: ${propColor.value}\nSize: ${propSize.value}\nPosition: ${propPos.value}`);
});
