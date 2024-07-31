document.getElementById('signup-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        var errorMessage = document.getElementById('error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.id = 'error-message';
            errorMessage.className = 'error-message';
            this.insertBefore(errorMessage, this.firstChild);
        }
        errorMessage.textContent = 'Passwords do not match';
        event.preventDefault();
    } else {
        var existingError = document.getElementById('error-message');
        if (existingError) {
            existingError.remove();
        }
    }
});
