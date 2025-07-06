export function Login() {
  return (
    <main className="container">
      <img class="chilllogo" src="/Image/logochill.jpg" alt="logochill" />

      <div className="top container">
        <h3 className="title">Masuk</h3>
        <p className="pg">Selamat datang kembali </p>
      </div>
      <form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="Masukkan username"
          name="username"
          id="username"
        />

        <label htmlFor="username">password</label>
        <input
          type="text"
          placeholder="Masukkan password"
          name="password"
          id="password"
        />
        <i className="fa-solid fa-eye-slash"></i>

        <p>belum punya akun?</p>
        <a href="/register">daftar</a>
        <br></br>
        <a href="">lupa kata sandi </a>
        <button>Masuk</button>
        <p>atau</p>

        <button type="button">
          <img src="Image/Google__G__logo.svg.png" alt="google-icon" /> Masuk
          dengan google
        </button>
      </form>
    </main>
  );
}

export default Login;
