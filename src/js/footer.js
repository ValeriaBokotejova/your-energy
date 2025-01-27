import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const footerForm = document.querySelector('.footer__form');

  if (footerForm) {
    footerForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const emailInput = document.querySelector('.footer__input');
      const email = emailInput.value.trim();

      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailPattern.test(email)) {
        iziToast.error({
          title: 'Error.',
          message: 'Please enter a valid email address.',
          position: 'bottomRight',
        });
        return;
      }

      try {
        const response = await fetch(
          'https://your-energy.b.goit.study/api/subscription',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();

        if (response.status === 201) {
          console.log("Triggering iziToast.success...");
          iziToast.success({
            title: 'Success',
            message: result.message || "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.",
            position: 'topRight',
          });
        } else if (response.status === 400) {
          iziToast.warning({
            title: 'Warning',
            message: result.message || 'Incorrect data. Please check your email.',
            position: 'topRight',
          });
        } else if (response.status === 409) {
          iziToast.warning({
            title: 'Warning',
            message: result.message || 'This email has already been subscribed.',
            position: 'topRight',
          });
        } else {
          iziToast.error({
            title: 'Error',
            message: result.message || 'There was an error. Please try again later.',
            position: 'topRight',
          });
        }
      } catch (error) {
        iziToast.error({
          title: 'Error',
          message: 'Could not connect to the server. Please try again later.',
          position: 'topRight',
        });
      }

      emailInput.value = '';
    });
  }
});
