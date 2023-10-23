import React, { Fragment, useState } from "react";

const InputPkmCom = () => {
    const [id_pkm, setIdPkm] = useState("");
    const [judul_pkm, setJudulPkm] = useState("");
    const [tahun_pkm, setTahunPkm] = useState("");
    const [bidang_pkm, setBidangPkm] = useState("");
    const [link_pkm, setLinkPkm] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = { judul_pkm, tahun_pkm, bidang_pkm, link_pkm };
            const response = await fetch("http://localhost:3100/pkms",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            if (response.ok) {
              alert("Data PKM berhasil ditambahkan");
            } else {
              console.error("Error inserting data:", response.statusText);
            }
            window.location = "http://localhost:5173/pkm/list"
        } catch (err){
            console.error(err.message)
        }
    }

    return (
        <Fragment>
          <h1 className="text-center mt-5">Input PKM</h1>
          <form className="mt-5" onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>Judul PKM</label>
              <input
                type="text"
                className="form-control"
                value={judul_pkm}
                onChange={(e) => setJudulPkm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tahun PKM</label>
              <input
                type="text"
                className="form-control"
                value={tahun_pkm}
                onChange={(e) => setTahunPkm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bidang PKM</label>
              <input
                type="text"
                className="form-control"
                value={bidang_pkm}
                onChange={(e) => setBidangPkm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Link PKM</label>
              <input
                type="text"
                className="form-control"
                value={link_pkm}
                onChange={(e) => setLinkPkm(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Add</button>
          </form>
        </Fragment>
      );
    };
    
export default InputPkmCom;