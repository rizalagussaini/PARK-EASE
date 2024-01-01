function login() {
    var userType = document.getElementById('userType').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (userType === 'customer' && username === 'customer_user' && password === 'customer_password') {
        alert('Customer Login berhasil!');
        // Di sini, Anda dapat mengarahkan pelanggan ke halaman setelah login
    } else if (userType === 'attendant' && username === 'attendant_user' && password === 'attendant_password') {
        alert('Parking Attendant Login berhasil!');
        // Di sini, Anda dapat mengarahkan petugas parkir ke halaman setelah login
    } else {
        alert('Login gagal. Periksa kembali informasi login Anda.');
    }
}

function forgotPassword() {
    var username = prompt('Masukkan username Anda:');
    if (username) {
        alert('Email instruksi reset password telah dikirim ke alamat email Anda.');
        // Di sini, Anda dapat mengirim email reset password atau mengarahkan ke halaman reset password
    }
}

function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

function register() {
    var registerUsername = document.getElementById('registerUsername').value;
    var registerPassword = document.getElementById('registerPassword').value;

    // Contoh validasi sederhana
    if (registerUsername && registerPassword) {
        alert('Registrasi berhasil! Silakan login.');
        // Di sini, Anda dapat mengarahkan pengguna ke halaman login atau melakukan langkah registrasi lebih lanjut
    } else {
        alert('Registrasi gagal. Pastikan semua kolom terisi.');
    }
}
