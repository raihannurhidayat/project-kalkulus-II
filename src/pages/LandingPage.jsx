import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MImage from "../assets/images/M.png";
import KImage from "../assets/images/K.png";
import I2Image from "../assets/images/I2.png";
import Footer from "../components/Footer";
import "../style/landingPage.css";
import RosiImage from "../assets/images/Rosi.png";
import SalmaImage from "../assets/images/Salma.png";
import RaihanurImage from "../assets/images/Raihanur.png";
import RaihanaImage from "../assets/images/Raihana.png";
import IgImage from "../assets/images/Ig.png";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const LandingPage = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const titleRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    AOS.init();

    gsap.to(textRef.current, {
      duration: 4,
      text: `Selesaikan Tugas Mengenai Deret <span>Aritmatika</span> dan
      <span>Geometri</span> Mu Sekarang !`,
      ease: "power1.inOut",
    });

    gsap.to(titleRef.current, {
      duration: 2,
      text: `Project Kalkulus II <span>Kelompok 4</span>`,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      {/* Into section start */}
      <div className="introhal wrap-padding">
        <div className="wrapper-hero-section">
          <div
            className="hero-section"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="judul" ref={titleRef}></h1>
            <p ref={textRef}></p>
            <a href="#kalkulator">Coba Sekarang</a>
          </div>
          <div
            className="hero-image"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={I2Image} alt="abs" className="image" />
          </div>
        </div>
      </div>
      {/* Into section end */}

      {/* about section start */}
      <div data-aos="zoom-in">
        <svg
          id="about"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#76abae"
            fill-opacity="1"
            d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,101.3C672,117,768,171,864,186.7C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="about-section">
          <h1>Tau kah sobat deret itu apa?</h1>
          <p className="teks">
            Deret adalah bentuk penjumlahan yang terdiri atas suku-suku barisan
            bilangan yang tersusun secara berurutan. Deret juga memiliki banyak
            bentuk pola bilanganya, namun disini akan dijelaskan hanya mengenai
            deret dengan pola bentuk bilangan aritmetika dan geometri
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#76abae"
            fill-opacity="1"
            d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,101.3C672,117,768,171,864,186.7C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* about section end */}

      {/* materi section start */}
      <div
        id="feature"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="wrap-padding"
      >
        <div className="box">
          <img src={MImage} alt="Materi Deret" />
          <div className="button">
            <p className="judulmk">MATERI DERET</p>
            <button
              className="btn"
              onClick={() => navigate("/materi/aritmatika")}
              style={{
                backgroundColor: "#615549",
                borderColor: "white",
                right: "10px",
              }}
            >
              Aritmetika
            </button>
            <button
              className="btn"
              onClick={() => navigate("/materi/geometri")}
              style={{
                backgroundColor: "#615549",
                borderColor: "white",
                left: "10px",
              }}
            >
              Geometri
            </button>
          </div>
        </div>
      </div>
      {/* materi section end */}

      {/* kalkulator section start */}
      <div
        className="wrap-padding"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <div className="box">
          <img src={KImage} alt="Kalkulator Deret" />
          <div className="button">
            <h1 className="judulmk">KALKULATOR DERET</h1>
            <button
              className="btn"
              onClick={() => navigate("/aritmatika")}
              style={{ backgroundColor: "#615549", borderColor: "white" }}
            >
              Aritmetika
            </button>
            <button
              className="btn"
              onClick={() => navigate("/geometri")}
              style={{ backgroundColor: "#615549", borderColor: "white" }}
            >
              Geometri
            </button>
          </div>
        </div>
      </div>
      {/* kalkulator section end */}

      {/* our team section start */}
      <svg
        id="ourteam"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#76ABAE"
          fill-opacity="1"
          d="M0,224L24,229.3C48,235,96,245,144,229.3C192,213,240,171,288,160C336,149,384,171,432,176C480,181,528,171,576,176C624,181,672,203,720,186.7C768,171,816,117,864,128C912,139,960,213,1008,213.3C1056,213,1104,139,1152,117.3C1200,96,1248,128,1296,160C1344,192,1392,224,1416,240L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <div className="ourteamhal wrap-padding">
        <div className="team">This Is Our Team</div>
        <div className="boxteam">
          <div className="box1" data-aos="flip-left" data-aos-duration="1000">
            <img src={RaihanurImage} className="img" />
            <p className="nama">Muhamad Raihan Nurhidayat</p>
            <div className="box1-sosial-media">
              <img src={IgImage} className="ig" />
              <a
                href="https://www.instagram.com/raihan_hdy/?igsh=b25ueG1xbndqcmxn%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                @raihan_hdy
              </a>
            </div>
          </div>
          <div className="box1" data-aos="flip-left" data-aos-duration="1500">
            <img src={SalmaImage} className="img" alt="Materi Deret" />
            <p className="nama">Salma Khairunnisa Azzahra</p>
            <div className="box1-sosial-media">
              <img src={IgImage} className="ig" />
              <a
                href="https://www.instagram.com/salmakhz_?igsh=dnBiOW56aThoaXMy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @salmakhz_
              </a>
            </div>
          </div>
          <div className="box1" data-aos="flip-left" data-aos-duration="2000">
            <img src={RosiImage} className="img" alt="Materi Deret" />
            <p className="nama">Rosi Saraswati Alrasid</p>
            <div className="box1-sosial-media">
              <img src={IgImage} className="ig" />
              <a
                href="https://www.instagram.com/salrasidd?igsh=amoyOWl4dmpmdXE3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @salrasidd
              </a>
            </div>
          </div>
          <div className="box1" data-aos="flip-left" data-aos-duration="2500">
            <img src={RaihanaImage} className="img" alt="Materi Deret" />
            <p className="nama">Mohamad Raihan Ardiansyah</p>
            <div className="box1-sosial-media">
              <img src={IgImage} className="ig" />
              <a
                href="https://www.instagram.com/raihanrdh_?igsh=ajd3YnI4bnNyOWEz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @raihanrdh_
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#76ABAE"
          fill-opacity="1"
          d="M0,224L24,229.3C48,235,96,245,144,229.3C192,213,240,171,288,160C336,149,384,171,432,176C480,181,528,171,576,176C624,181,672,203,720,186.7C768,171,816,117,864,128C912,139,960,213,1008,213.3C1056,213,1104,139,1152,117.3C1200,96,1248,128,1296,160C1344,192,1392,224,1416,240L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      {/* our team section end */}

      <Footer />
    </>
  );
};

export default LandingPage;
