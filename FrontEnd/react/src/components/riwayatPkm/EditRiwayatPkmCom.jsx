import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

function EditRiwayatPkmCom() {
  const { id_riwayatpkm } = useParams();
  const [data, setData] = useState({
    id_pkm: "",
    id_dosen: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updateRiwayatPkm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3100/riwayatpkm/${id_riwayatpkm}`, {
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
    window.location = "http://localhost:5173/riwayatpkm/list";
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Edit Riwayat PKM</h1>
      <form className="mt-5" onSubmit={updateRiwayatPkm}>
        <div className="form-group">
          <label>Id PKM</label>
          <input
            type="text"
            name="id_pkm"
            className="form-control"
            value={data.id_pkm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Id Dosen</label>
          <input
            type="text"
            name="id_dosen"
            className="form-control"
            value={data.id_dosen}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={updateRiwayatPkm}>
          Update Riwayat PKM
        </button>
      </form>
    </Fragment>
  );
}

export default EditRiwayatPkmCom;
