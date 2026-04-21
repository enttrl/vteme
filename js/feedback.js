document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phoneInput');

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
});

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('ТВОЙ_PUBLIC_KEY');

  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.feedback-form__submit');
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value
    };

    try {
      await emailjs.send(
        'ТВОЙ_SERVICE_ID',
        'ТВОЙ_TEMPLATE_ID',
        data
      );

      alert('Заявка отправлена!');
      form.reset();

    } catch (error) {
      console.error(error);
      alert('Ошибка отправки');
    }

    btn.disabled = false;
    btn.textContent = 'Перезвоните мне';
  });
});
