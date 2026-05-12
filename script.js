document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resetForm');
    const newPassword = document.getElementById('new_password');
    const confirmPassword = document.getElementById('confirm_password');
    const errorMsg = document.getElementById('error_msg');

    // Validasi saat form dikirim
    form.addEventListener('submit', function(event) {
        if (newPassword.value !== confirmPassword.value) {
            event.preventDefault();
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
        }
    });

    // Validasi interaktif saat mengetik
    confirmPassword.addEventListener('input', function() {
        if (confirmPassword.value !== newPassword.value && confirmPassword.value !== "") {
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
        }
    });
});