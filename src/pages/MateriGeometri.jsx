import React from "react";
import "../style/materiAritmatika.css"

const MateriGeometri = () => {
  return (
    <main>
      <section class="hero">
        <h1>Materi Deret Geometri</h1>
      </section>
      <br /> <br /> <br /> <br />
      <section id="Deret-geometri">
        <article class="deret-geometri-content">
          <h2>Pengertian Deret Geometri</h2>
          <p>
            Deret geometri adalah suatu barisan bilangan yang setiap suku
            berbeda dengan suku sebelumnya dengan dikali dengan suatu bilangan
            tetap yang disebut rasio atau faktor pengali.
          </p>
          <h2>Rumus Deret Geometri </h2>
          <p>Suku ke-n (an) dari deret geometri adalah: </p>
          <p>
            <strong>an= a * r (n-1)</strong>
          </p>
          <p>
            Di mana:
            <ul>
              <li>
                <strong>a</strong> adalah suku pertama (awal) dari deret
                geometri
              </li>
              <li>
                <strong>r</strong> adalah rasio (rasio perbedaan antara setiap
                dua suku berturut-turut)
              </li>
              <li>
                <strong>n</strong> adalah indeks suku yang diinginkan
              </li>
            </ul>
          </p>
          <h2>Jumlah (Sn) dari n suku pertama deret geometri</h2>
          <p>
            <strong>Sn = a * 1 - r(n)/1 - r</strong>
          </p>
          <ul>
            <li>
              <strong>a</strong> adalah suku pertama (awal) dari deret geometri
            </li>
            <li>
              <strong>r</strong> adalah rasio (rasio perbedaan antara setiap dua
              suku berturut-turut)
            </li>
            <li>
              <strong>n</strong> adalah indeks suku yang diinginkan
            </li>
          </ul>
          <h2>Sifat-sifat deret geometri</h2>
          <p>
            1. (r) adalah konstanta perbandingan antara dua suku berturut-turut.
          </p>
          <p>
            2. (r {"<"} 1), maka deret geometri konvergen (memiliki jumlah tak
            hingga).
          </p>
          <p>
            3. (r {">"} 1) atau (r {"<"} -1), maka deret geometri divergen
            (tidak memiliki jumlah tak hingga).
          </p>
          <h2>Jenis-jenis geometri</h2>
          <p>
            <strong>1. Deret geometri tak hingga divergen</strong>
          </p>
          <p>
            Deret geometri tak hingga divergen merupakan deret yang nilai
            bilangannya semakin besar dan tak bisa dihitung jumlahnya.
          </p>
          <p>
            <strong>1. Deret geometri tak hingga konvergen</strong>
          </p>
          <p>
            Deret tak hingga konvergen adalah suatu deret yang nilai bilangannya
            semakin mengecil dan dapat dihitung jumlahnya.
          </p>
          <h3>Contoh Soal</h3>
          <div class="example">
            <p>
              <strong>
                1. Carilah jumlah dari deret geometri 2 + 6 + 18 + … + 4374
              </strong>
            </p>
            <p>a = 2 dan r = 3</p>
            <p>Un = ar(n-1)</p>
            <p>4374 = 2.(3n-1)</p>
            <p>3n-1 = 4374 / 2</p>
            <p>3n-1 = 2187</p>
            <p>3n-1 = 37</p>
            <p>n-1 = 7</p>
            <p>n = 8</p>
          </div>
          <p>maka S8 = a(r(n) – 1) / (r – 1)</p>
          <br />
          <div class="example">
            <p>S8 = 2(38 - 1) / (3 - 1)</p>
            <p>S8 = 2 (6560)/ 2</p>
          </div>
          <p>Jadi S8 = 6560</p>
          <div class="example">
            <p>
              <strong>
                2. Tentukan jumlah deret geometri berikut. ini, 4 + 2 + 1 + 1/2
                + 1/4 ……
              </strong>
            </p>
            <p>Diketahui a = 4 dan r = 1/2</p>
            <p>Sn = a / (1 - r)</p>
            <p>Sn = 4 / (1 - 1/2)</p>
            <p>Sn = 4 / (1/2)</p>
            <p>Sn = 4 * 2</p>
          </div>
          <p>Jadi jumlah deret geometri tersebut adalah 8.</p>
        </article>
      </section>
    </main>
  );
};

export default MateriGeometri;
