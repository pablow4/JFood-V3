const couponTab = document.querySelector('.coupon-tab');
const couponContainer = document.querySelector('.coupon-container');
const couponCloseBtn = document.querySelector('.coupon-close');

couponTab.addEventListener('click', () => {
  couponContainer.style.display = 'block';
});

couponCloseBtn.addEventListener('click', () => {
  couponContainer.style.display = 'none';
});

const removeItemBtns = document.querySelectorAll('.remove-item-btn');

removeItemBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Item removed');
  });
});

function confirmPayment(paymentMethod) {
  const creditCardForm = document.getElementById('credit-card-form');
  const debitCardForm = document.getElementById('debit-card-form');
  const pixForm = document.getElementById('pix-form');

  if (paymentMethod === 'credit-card') {
    creditCardForm.style.display = 'block';
    debitCardForm.style.display = 'none';
    pixForm.style.display = 'none';
  } else if (paymentMethod === 'debit-card') {
    creditCardForm.style.display = 'none';
    debitCardForm.style.display = 'block';
    pixForm.style.display = 'none';
  } else if (paymentMethod === 'pix') {
    creditCardForm.style.display = 'none';
    debitCardForm.style.display = 'none';
    pixForm.style.display = 'block';
  }
}

function finalizePurchase() {
}

function menuLoginAbrir() {
  var menuLog = document.querySelector('.loginmenu');
  if (menuLog.classList.contains('abrirlogin')) {
    menuLog.classList.remove('abrirlogin');
  } else {
    menuLog.classList.add('abrirlogin');
  }
}

// Editar Perfil
const editProfileBtn = document.querySelector('.btn');

editProfileBtn.addEventListener('click', () => {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const profileInfo = document.querySelectorAll('.profile-info span');

  profileName.contentEditable = true;
  profileDescription.contentEditable = true;

  profileInfo.forEach((info) => {
    info.contentEditable = true;
  });

  editProfileBtn.textContent = 'Salvar Alterações';
  editProfileBtn.removeEventListener('click', handleEditProfile);
  editProfileBtn.addEventListener('click', handleSaveChanges);
});

function handleSaveChanges() {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const profileInfo = document.querySelectorAll('.profile-info span');

  profileName.contentEditable = false;
  profileDescription.contentEditable = false;

  profileInfo.forEach((info) => {
    info.contentEditable = false;
  });

  editProfileBtn.textContent = 'Editar Perfil';
  editProfileBtn.removeEventListener('click', handleSaveChanges);
  editProfileBtn.addEventListener('click', handleEditProfile);
}
