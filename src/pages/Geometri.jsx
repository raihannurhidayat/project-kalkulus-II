import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/geometri.css";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import validate from "../service/validate";
import Alert from "../components/Alert";

gsap.registerPlugin(TextPlugin);

const Geometrihal = () => {
  const [deret, setDeret] = useState("");
  const [nilaiN, setNilaiN] = useState("");
  const [hasilPerhitungan, setHasilPerhitungan] = useState("");
  const [jenisPerhitungan, setJenisPerhitungan] = useState(null);
  const [alert, setAlert] = useState(false);

  const titleRef = useRef(null);
  const title2Ref = useRef(null);

  const handleHitung = () => {
    const deretArray = deret.split(",").map((item) => parseFloat(item.trim()));

    if (deretArray.length > 0) {
      const v = validate(deretArray, deretArray, "geometri", setAlert);
      if (v) return;
    }

    if (deretArray.some(isNaN)) {
      // alert("Mohon pastikan semua elemen dalam deret adalah angka yang valid!");
      return;
    }

    if (jenisPerhitungan === "nilaiN") {
      const n = parseInt(nilaiN);
      if (!isNaN(n) && n >= 1) {
        const a = deretArray[0];
        const r = deretArray[1] / deretArray[0];
        const nilaiSukuKeN = a * Math.pow(r, n - 1);
        setHasilPerhitungan(
          `R : ${r}, dengan menggunakan rumus Un = a*r^n-1, suku ke-${nilaiN} = ${nilaiSukuKeN}`
        );
      } else {
        // alert("Masukkan nilai N yang valid");
      }
    } else if (jenisPerhitungan === "nilaiSn") {
      const n = parseInt(nilaiN);
      if (!isNaN(n) && n >= 1) {
        const a = deretArray[0];
        const r = deretArray[1] / deretArray[0];
        const jumlahSn = (a * (Math.pow(r, n) - 1)) / (r - 1);
        setHasilPerhitungan(
          `R : ${r}, dengan menggunakan rumus Sn = a*(1-r^n)/(1-r), S${n} = ${jumlahSn}`
        );
      } else {
        // alert("Masukkan nilai N yang valid");
      }
    } else if (jenisPerhitungan === "meanGeometri") {
      const meanGeometri = Math.pow(
        deretArray.reduce((acc, val) => acc * val, 1),
        1 / deretArray.length
      );
      setHasilPerhitungan(
        `Dengan menggunakan rumus GM= n√x1*x2*...*xn, maka nilai GM = ${meanGeometri}`
      );
    } else {
      // alert("Pilih jenis perhitungan yang valid");
    }
  };

  const handleReset = () => {
    setDeret("");
    setNilaiN("");
    setHasilPerhitungan("");
    setJenisPerhitungan(null);
  };

  useEffect(() => {
    AOS.init();

    gsap.to(titleRef.current, {
      duration: 3,
      text: `Selamat Datang di Kalkulator <span>Geometri</span>`,
      ease: "power1.inOut",
    });
    gsap.to(title2Ref.current, {
      duration: 3,
      text: `Silahkan Temukan Deret Anda`,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      {alert ? (
        <div className="wrapper-alert">
          <Alert setAlert={setAlert} deret="Geometri" />
        </div>
      ) : (
        <div className="wrap-geo">
          <div className="wrap-title">
            <h1 className="welcome" ref={titleRef}></h1>
            <h2 className="welcome" ref={title2Ref}></h2>
          </div>
          <div className="DeretGeo" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="title">Kalkulator Deret Geometri</h2>
            <div className="perintah">
              Masukkan Deret ( pisahkan dengan "," )
            </div>
            {/* <label className="label"> </label>   */}
            <input
              className="perintah-input"
              type="text"
              value={deret}
              onChange={(e) => setDeret(e.target.value)}
            />

            {jenisPerhitungan && (
              <div className="nilain">
                {jenisPerhitungan !== "meanGeometri" && (
                  <input
                    type="number"
                    placeholder="Masukkan nilai n"
                    value={nilaiN}
                    onChange={(e) => setNilaiN(e.target.value)}
                    className="perintah-input"
                  />
                )}
                <div>
                  <button className="tomboli" onClick={handleHitung}>
                    <div className="teks-tombol">Hitung</div>
                  </button>
                </div>
              </div>
            )}

            <div className="wrap-button-option">
              <button
                className={`tombol ${
                  jenisPerhitungan == "nilaiN" ? "choose" : ""
                }`}
                onClick={() => {
                  setJenisPerhitungan("nilaiN");
                }}
              >
                <div className="teks-tombol">Cari Nilai Suku ke-n</div>
              </button>
              <button
                className={`tombol ${
                  jenisPerhitungan == "nilaiSn" ? "choose" : ""
                }`}
                onClick={() => setJenisPerhitungan("nilaiSn")}
              >
                <div className="teks-tombol">Cari Nilai Sn</div>
              </button>
              <button
                className={`tombol ${
                  jenisPerhitungan == "meanGeometri" ? "choose" : ""
                }`}
                onClick={() => setJenisPerhitungan("meanGeometri")}
              >
                <div className="teks-tombol">Cari Mean Geometri</div>
              </button>
            </div>

            <button className="tombol" onClick={handleReset}>
              <div className="teks-tombol"> Reset</div>
            </button>
            {hasilPerhitungan && (
              <p className="hasilgeo"> {hasilPerhitungan}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Geometrihal;
