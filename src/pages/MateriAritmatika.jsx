import React from "react";
import "../style/materiAritmatika.css"

const MateriAritmatika = () => {

  console.log(window.location.href)
  
  return (
    <main>
      <section class="hero">
        <h1>Materi Deret Aritmetika</h1>
      </section>
      <br /> <br /> <br /> <br />
      <section id="Deret-aritmetika">
        <article class="deret-aritmetika-content">
          <h2>Pengertian Deret Aritmetika</h2>
          <p>
            Deret aritmatika adalah suatu rangkaian bilangan dimana setiap suku
            (elemen) setelah suku pertama dibentuk dengan cara menambahkan
            jumlah tetap (selisih) kepada suku sebelumnya. Selisih ini biasa
            disebut dengan istilah beda (𝑑).
          </p>
          <h2>Rumus Deret Aritmetika</h2>
          <p>Rumus suku ke-n (Un) dalam deret aritmetika adalah:</p>
          <p>
            <strong>Un = a + (n - 1)d</strong>
          </p>
          <p>
            Di mana:
            <ul>
              <li>
                <strong>Un</strong> = suku ke-n
              </li>
              <li>
                <strong>a</strong> = suku pertama
              </li>
              <li>
                <strong>n</strong> = posisi suku yang dicari
              </li>
              <li>
                <strong>d</strong> = beda (selisih antar suku)
              </li>
            </ul>
          </p>
          <h2>Jumlah Deret Aritmetika</h2>
          <p>Rumus jumlah n suku pertama (Sn) dalam deret aritmetika adalah:</p>
          <p>
            <strong>Sn = n/2 * (2a + (n - 1)d)</strong>
          </p>
          <p>atau</p>
          <p>
            <strong>Sn = n/2 * (a + Un)</strong>
          </p>
          <br />
          <h3>Contoh Soal</h3>
          <div class="example">
            <p>
              1. Tentukan suku ke-5 dari deret aritmetika dengan suku pertama 3
              dan beda 4.
            </p>
            <p>Jawaban:</p>
            <p>Un = a + (n - 1)d</p>
            <p>U5 = 3 + (5 - 1)4 = 3 + 16 = 19</p>
          </div>
          <p>Jadi, suku ke-5 adalah 19.</p>
          <div class="example">
            <p>
              2. Hitunglah jumlah 10 suku pertama dari deret aritmetika dengan
              suku pertama 2 dan beda 3.
            </p>
            <p>Jawaban:</p>
            <p>Sn = n/2 * (2a + (n - 1)d)</p>
            <p>S10 = 10/2 * (2*2 + (10 - 1)3) = 5 * (4 + 27) = 5 * 31 = 155</p>
          </div>
          <p>Jadi, jumlah 10 suku pertama adalah 155.</p>
        </article>
      </section>
    </main>
  );
};

export default MateriAritmatika;
