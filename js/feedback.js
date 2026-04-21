document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phoneInput');
  const feedbackForm = document.getElementById('feedbackForm');

  if (phoneInput) {
    phoneInput.addEventListener('input', handlePhoneMask);
    phoneInput.addEventListener('focus', handlePhoneMask);
    phoneInput.addEventListener('blur', handlePhoneBlur);
  }

  function handlePhoneMask(e) {
    let value = e.target.value.replace(/\D/g, '');

    if (!value.startsWith('7')) {
      value = '7' + value.replace(/^8/, '');
    }

    value = value.substring(0, 11);

    let formatted = '+7';

    if (value.length > 1) {
      formatted += ' (' + value.substring(1, 4);
    }
    if (value.length >= 5) {
      formatted += ') ' + value.substring(4, 7);
    }
    if (value.length >= 8) {
      formatted += ' - ' + value.substring(7, 9);
    }
    if (value.length >= 10) {
      formatted += ' - ' + value.substring(9, 11);
    }

    e.target.value = formatted;
  }

  function handlePhoneBlur(e) {
    if (e.target.value === '+7') {
      e.target.value = '';
    }
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(feedbackForm);
      const data = Object.fromEntries(formData.entries());

      console.log('Данные формы:', data);

      alert('Форма отправлена. Здесь позже подключится отправка на почту.');
      feedbackForm.reset();
    });
  }
});
