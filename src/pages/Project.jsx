import React, { useState } from "react";
import "../style/project.css";
import validate from "../service/validate";
import { snAritmatika } from "../service/rumusSn";
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

  const handleChange = (e) => {
    const data = e.target.value;
    setTemp(data);
  };

  const handleClick = () => {
    setDeret(temp.split(",").map(Number));
    setTemp("");
    setSukuSearch("");
    setN(0);
  };

  if (deret.length > 0) {
    validate(deret, setDeret, "aritmatika", setAlert);
    // console.log(deret.join(", "))
  }

  const handleSearchSuku = (n, deret) => {
    const a = deret[0];
    const b = deret[1] - deret[0];
    const result = a + (n - 1) * b;
    setN(n);
    setSukuSearch(result);
  };

  const sn = snAritmatika(deret);

  return (
    <>
      {alert && (
        <div className="wrapper-alert">
          <Alert setAlert={setAlert} />
        </div>
      )}
      <div className={`container ${alert && "blur"}`}>
        {/* calculate start */}
        <div className="wrap">
          <div className="calculate-section">
            <BadgeNav title={"Aritmatika"} classname="badge-aritmatika" />
            <BadgeNav title={"Geometri"} classname="badge-geometri" />
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
                <div onClick={handleClick} className="calculate-section-button">
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
                  {deret.map((item, index) => (
                    <p key={index}>
                      Suku Ke-{index + 1} = {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div style={{textAlign: "center"}}>
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
      </div>
    </>
  );
};

export default Project;
