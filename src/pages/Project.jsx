import React, { useState } from "react";
import "../style/project.css";
import validate from "../service/validate";
import { snAritmatika, snAritmatikaN } from "../service/rumusSn";
import BadgeNav from "../components/BadgeNav";
import image from "../../public/img/image-1.png";
import Alert from "../components/Alert";
import Search from "../components/Search";

const Project = () => {
  const [deret, setDeret] = useState([]);
  const [temp, setTemp] = useState("");
  const [alert, setAlert] = useState(false);
  const [sukuSearch, setSukuSearch] = useState("");
  const [n, setN] = useState(0);
  const [nDinamis, setNDinamis] = useState(0);
  const [searchSn, SetSearchSn] = useState(0);
  const [tempSearchSn, setTempSearchSn] = useState(0);
  const [display, setDisplay] = useState("aritmatika");

  const handleChange = (e) => {
    const data = e.target.value;
    setTemp(data);
  };

  const handleClick = () => {
    setDeret(temp.split(",").map(Number));
    setTemp("");
    setSukuSearch("");
    setN(0);
    setN(0);
    setTempSearchSn(0);
  };

  if (deret.length > 0 && display === "aritmatika") {
    validate(deret, setDeret, "aritmatika", setAlert);
  }

  const handleSearchSuku = (n, deret) => {
    const a = deret[0];
    const b = deret[1] - deret[0];
    const result = a + (n - 1) * b;
    setN(n);
    setSukuSearch(result);
  };

  const sn = snAritmatika(deret);
  const handleSearchSn = () => {
    const snDinamis = snAritmatikaN(deret, nDinamis);
    SetSearchSn(snDinamis);
    setTempSearchSn(nDinamis);
    setNDinamis("");
  };

  // diantara start
  const handleClickDiantara = () => {
    const ingredient = temp.split(",");
    const last = Number(ingredient[ingredient.length - 1]);
    const a = Number(ingredient[0]);
    const b = (last - a) / (ingredient.length - 1);

    let resultDinamis = [];
    for (let i = 0; i < ingredient.length; i++) {
      resultDinamis.push(a + b * i);
    }
    const resultFinal = resultDinamis.join(",").split(",");

    // validate(resultFinal,setDeret,"aritmatika", setAlert)
    console.log(resultFinal)
    if(resultFinal[0]=== "NaN"){
      console.log("Error bang")
      setAlert((prev) => !prev)
      setDeret([])
      return
    }
    setDeret(resultFinal);
  };
  // diantara end

  return (
    <>
      {alert && (
        <div className="wrapper-alert">
          <Alert setAlert={setAlert} />
        </div>
      )}
      {display === "aritmatika" && (
        <div className={`container ${alert && "blur"}`}>
          {/* calculate start */}
          <div className="wrap">
            <div className="calculate-section">
              <BadgeNav
                display={display}
                setDisplay={setDisplay}
                title={"Aritmatika"}
                classname="badge-aritmatika"
                setDeret={setDeret}
                setTemp={setTemp}
              />
              <BadgeNav
                display={display}
                setDisplay={setDisplay}
                title={"Diantara"}
                classname="badge-geometri"
                setDeret={setDeret}
                setTemp={setTemp}
              />
              <div className="calculate-section-left">
                <h3 className="calculate-section-header">
                  Selamat Datang <br /> Silahkan Temukan{" "}
                  <span className="calculate-section-header-span">Deret</span>{" "}
                  Anda
                </h3>
                <input
                  className="calculate-section-input"
                  type="text"
                  placeholder="Masukan Deret Anda"
                  onChange={handleChange}
                  value={temp}
                />
                <div>
                  <div
                    onClick={handleClick}
                    className="calculate-section-button"
                  >
                    <span>Hitung</span>
                  </div>
                </div>
              </div>
              <div className="calculate-section-right">
                <div>
                  <img className="image-1" width={200} src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* calculate end */}

          {/* Result Start */}
          {deret.length > 0 && (
            <div className="result-section">
              <div>
                <div>
                  <h3 className="result-section-header">
                    Deret Yang Anda Masukan
                  </h3>
                  <h3 className="result-section-header">{deret.join(", ")}</h3>
                </div>
                <div>
                  <h3 className="result-section-ket">Keterangan</h3>
                  <div className="result-section-deret">
                    <p>Nilai a = {deret[0]}</p>
                    <p>Nilai b = {deret[1] - deret[0]}</p>
                    {deret.map((item, index) => (
                      <p key={index}>
                        Suku Ke-{index + 1} = {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="result-section-search-wrap-input">
                <div>
                  <Search deret={deret} handleSeachSuku={handleSearchSuku} />
                </div>
                {n > 0 && (
                  <div className="result-section-search-wrap">
                    <p>
                      Nilai Dari Suku ke-{n} = {sukuSearch}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Result End */}

          {/* SN start */}
          {deret.length > 0 && (
            <div className="sn-section">
              <div className="sn-section-wrap">
                <p className="sn-section-p">
                  Dengan menggunakan rumus Sn = n/2 (2a + (n-1)b) dengan
                  informasi yang sudah diketahui maka dapat ditemukan bahwa
                  nilai dari penjumlahan semua suku adalah{" "}
                  <span className="sn-section-span">{sn}</span>
                </p>
                <div>
                  <input
                    className="sn-section-input"
                    name="text"
                    placeholder="Masukan Nilai N"
                    type="search"
                    onChange={(e) => setNDinamis(parseInt(e.target.value))}
                    required
                    value={nDinamis}
                  />
                </div>
                {nDinamis != 0 && (
                  <button
                    type="button"
                    onClick={() => handleSearchSn()}
                    className="sn-section-button"
                  >
                    Cari SN
                  </button>
                )}
                {tempSearchSn > 0 ? (
                  <div>
                    Nilai dari S{tempSearchSn} = {searchSn}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
          {/* SN end */}
        </div>
      )}

      {display === "diantara" && (
        <div className={`container ${alert && "blur"}`}>
          {/* Diantara start */}
          <div className="wrap">
            <div className="calculate-section">
              <BadgeNav
                setDisplay={setDisplay}
                display={display}
                title={"Aritmatika"}
                classname="badge-aritmatika"
                setDeret={setDeret}
                setTemp={setTemp}
              />
              <BadgeNav
                display={display}
                setDisplay={setDisplay}
                title={"Diantara"}
                classname="badge-geometri"
                setDeret={setDeret}
                setTemp={setTemp}
              />
              <div className="calculate-section-left">
                <h3 className="calculate-section-header">
                  Selamat Datang <br /> Silahkan Temukan{" "}
                  <span className="calculate-section-header-span">
                    Nilai Diantara
                  </span>{" "}
                  Anda
                </h3>
                <input
                  className="calculate-section-input"
                  type="text"
                  placeholder="Masukan Deret Anda"
                  onChange={handleChange}
                  value={temp}
                />
                <div>
                  <div
                    onClick={handleClickDiantara}
                    className="calculate-section-button"
                  >
                    <span>Cari</span>
                  </div>
                </div>
              </div>
              <div className="calculate-section-right">
                <div>
                  <img className="image-1" width={200} src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Diantara end */}
          {/* result diantara start */}
          {deret.length > 0 && (
            <div className="result-section">
              <div>
                <div>
                  <h3 className="result-section-header">
                    Deret Yang Anda Masukan
                  </h3>
                  <h3 className="result-section-header">{temp.split(", ")}</h3>
                </div>
                <div>
                  <h3 className="result-section-ket">Keterangan</h3>
                  <div className="result-section-deret">
                    <p>Nilai b = {deret[1] - deret[0]}</p>
                    {deret.map((item, index) => {
                      if (index != 0 && index != deret.length - 1) {
                        return (
                          <p key={index}>
                            Nilai {temp.split(",")[index]} = {item}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="result-section-deret">
                  <p>Deret Anda yang utuh adalah = {deret.join(",")}</p>
                </div>
              </div>
            </div>
          )}
          {/* result diantara end */}
        </div>
      )}
    </>
  );
};

export default Project;
