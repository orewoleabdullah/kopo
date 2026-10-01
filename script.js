const form = document.querySelector('.cta-form');
const message = document.querySelector('.form-message');

if (form) {
    form.addEventListener('submit', async (event) => {
        // Prevent default browser submission/redirect
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : 'Join Waitlist';

        // Disable button while sending
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Joining...';
        }

        // Reset message and remove state classes before each submission
        if (message) {
            message.textContent = '';
            message.classList.remove('is-success', 'is-error');
        }

        try {
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                if (message) {
                    message.textContent = "You're on the waitlist! 🎉";
                    message.classList.add('is-success');
                }
            } else {
                if (message) {
                    message.textContent = "We couldn't add you right now. Please try again.";
                    message.classList.add('is-error');
                }
            }
        } catch (error) {
            if (message) {
                message.textContent = "We couldn't add you right now. Please try again.";
                message.classList.add('is-error');
            }
        } finally {
            // Re-enable button after response or error
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });
}
