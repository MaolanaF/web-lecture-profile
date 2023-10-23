import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

function EditPkmCom() {
  const { id_pkm } = useParams();
  const [data, setData] = useState({
    judul_pkm: "",
    tahun_pkm: "",
    bidang_pkm: "",
    link_pkm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updatePkm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3100/pkms/${id_pkm}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Data PKM berhasil diperbarui");
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (err) {
      console.error(err.message);
    }
    window.location = "http://localhost:5173/pkm/list";
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Edit PKM</h1>
      <form className="mt-5" onSubmit={updatePkm}>
        <div className="form-group">
          <label>Judul PKM</label>
          <input
            type="text"
            name="judul_pkm"
            className="form-control"
            value={data.judul_pkm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Tahun PKM</label>
          <input
            type="text"
            name="tahun_pkm"
            className="form-control"
            value={data.tahun_pkm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bidang PKM</label>
          <input
            type="text"
            name="bidang_pkm"
            className="form-control"
            value={data.bidang_pkm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Link PKM</label>
          <input
            type="text"
            name="link_pkm"
            className="form-control"
            value={data.link_pkm}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={updatePkm}>
          Update PKM
        </button>
      </form>
    </Fragment>
  );
}

export default EditPkmCom;
