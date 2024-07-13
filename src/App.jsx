import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="flexHeader">
          <img src="./../public/Logo.svg" alt="logo" />
          <input type="text" placeholder="Cari apapun disini..." />
          <div className="box">
            <img src="../public/globe.png" alt="" />
            <select name="select">
              <option value="value1"> Bahasa Indonesia</option>
              <option value="value2" selected>
                {" "}
                Bahasa Indonesia
              </option>
              <option value="value3"> Bahasa Indonesia</option>
            </select>
          </div>
          <div className="boxFinish">
            <button>
              <img src="../public/gps.png" alt="location" />
            </button>{" "}
            <div className="flexHead">
              <p> Lokasi </p> <br />
              <select className="headerSelect" name="select">
                <option value="value1">
                  <span>Indonesia, Yogyakarta</span>
                </option>
                <option value="value2" selected>
                  {" "}
                  Indonesia, Yogyakarta
                </option>
                <option value="value3"> Indonesia, Yogyakarta</option>
              </select>
            </div>
          </div>
        </header>
        <div className="sectionOneBox">
          <section className="sectionOne">
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Gunung</span>
              </option>
              <option value="value2" selected>
                {" "}
                Gunung
              </option>
              <option value="value3">Gunung</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Pantai</span>
              </option>
              <option value="value2" selected>
                {" "}
                Pantai
              </option>
              <option value="value3">Pantai</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Kuliner</span>
              </option>
              <option value="value2" selected>
                {" "}
                Kuliner
              </option>
              <option value="value3">Kuliner</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Outband</span>
              </option>
              <option value="value2" selected>
                {" "}
                Outband
              </option>
              <option value="value3">Outband</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Sejarah</span>
              </option>
              <option value="value2" selected>
                {" "}
                Sejarah
              </option>
              <option value="value3">Sejarah</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Edukasi</span>
              </option>
              <option value="value2" selected>
                {" "}
                Edukasi
              </option>
              <option value="value3">Edukasi</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Romantis</span>
              </option>
              <option value="value2" selected>
                {" "}
                Romantis
              </option>
              <option value="value3">Romantis</option>
            </select>
            <select className="headerSelect" name="select">
              <option value="value1">
                <span>Alam</span>
              </option>
              <option value="value2" selected>
                {" "}
                Alam
              </option>
              <option value="value3">Alam</option>
            </select>
          </section>
          <div className="sectionOneButton">
            <button>
              <img src="../public/basket.png" alt="корзинка" />
            </button>
            <button>
              <img src="../public/user.png" alt="user" />
            </button>
          </div>
        </div>
        <div className="sectionTwoBox">
          <div className="sectionLeft">
            <h2>
              Liburan & nikmati <br />
              <span>tempat baru</span> di indonesia ️<span> ️🏝</span>
            </h2>
            <p>
              Destinize membuat kamu selalu update terkait tempat liburan <br />{" "}
              baru di Indonesia dengan mengikuti perkembangan para <br />{" "}
              influencer di sosial media ✨
            </p>
            <div className="sectionTwoButton">
              <button className="buutonOne">Mulai sekarang →</button>
              <button className="buutonTwo">
                <img src="../public/play-button.png" alt="" /> Putar Demo
              </button>
            </div>
          </div>
          <div className="sectionRight">
            <img src="../public/Group 592 1.svg" alt="" />
          </div>
        </div>
        <div className="sectionTrhBox">
          <img src="../public/image 1.svg" alt="" />
          <img src="../public/image 2.svg" alt="" />
          <img src="../public/image 3.svg" alt="" />
          <img src="../public/image 4.svg" alt="" />
          <img src="../public/image 5.svg" alt="" />
        </div>
        <div className="sectionFourBox">
          <div className="sectionFourLeft">
            <p>DESTINASI FAVORIT</p>
            <h2>✈ • Temukan Destinasi Favoritmu  </h2>
          </div>
          <div className="sectionFourRight"><p>Lihat semua  </p></div>
        </div>
        <div className="sectionFiveBox">
          <img src="../public/foto1.svg" alt="" />
          <img src="../public/foto2.svg" alt="" />
          <img src="../public/foto3.svg" alt="" />
          <img src="../public/foto4.svg" alt="" />
        </div>

      </div>
    </>
  );
}

export default App;
