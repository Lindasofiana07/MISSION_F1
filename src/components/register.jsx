

export function Register() {
  return (
    <main className="container">
      <img className="chilllogo" src="/Image/logochill.jpg" alt="logochill" />

      <div className="top container">
        <h3 className="title">Register</h3>
        <p className="pg">Isi kolom dibawah ini!</p>
      </div>
      <form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="Masukkan username"
          name="username"
          id="username"
        />

        <label htmlFor="password">password</label>
        <input
          type="text"
          placeholder="Masukkan password"
          name="password"
          id="password"
        />

        <label htmlFor="password">Konfirmasi </label>
        <input
          type="text"
          placeholder="ulang password"
          name="password"
          id="password"
        />
        <i className="fa-solid fa-eye-slash"></i>
       

        <p>
          sudah punya akun?
          <a href="register.html">Masuk</a>
        </p>

        <button>daftar</button>
        <p>atau</p>
        <button type="button">
          <img src="Image/Google__G__logo.svg.png" alt="google-icon" /> Masuk
          dengan google
        </button>
      </form>
    </main>
  );
}

export default Register;

