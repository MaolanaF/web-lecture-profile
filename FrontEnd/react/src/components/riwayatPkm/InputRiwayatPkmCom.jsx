import React, { Fragment, useState } from "react";

const InputRiwayatPkmCom = () => {
    const [id_pkm, setIdPkm] = useState("");
    const [id_dosen, setIdDosen] = useState("");
    const [dosenTerlibat, setDosenTerlibat] = useState([]);
    const [namaDosen, setNamaDosen] = useState("");
    
    const handleTambahDosen = () => {
        if (id_dosen) {
            setDosenTerlibat([...dosenTerlibat, id_dosen]);
            setNamaDosen('');
        }
    }
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { id_pkm, id_dosen  };
            const response = await fetch("http://localhost:3100/riwayatpkm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                alert("Data Riwayat PKM berhasil ditambahkan");
            } else {
                console.error("Error inserting data:", response.statusText);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Riwayat PKM</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label>Id PKM</label>
                    <input
                        type="text"
                        className="form-control"
                        value={id_pkm}
                        onChange={(e) => setIdPkm(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Id Dosen</label>
                    <input
                        type="text"
                        className="form-control"
                        value={id_dosen}
                        onChange={(e) => setIdDosen(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleTambahDosen}>Tambah Dosen</button>
                </div>
                {/* <div className="form-group">
                    <label>Nama Dosen Terlibat</label>
                    <input
                        type="text"
                        className="form-control"
                        value={namaDosen}
                        onChange={(e) => setNamaDosen(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleTambahDosen}>Tambah Dosen</button>
                </div> */}
                <div>
                    Dosen Terlibat:
                    <ul>
                        {dosenTerlibat.map((dosen, index) => (
                            <li key={index}>{dosen}</li>
                        ))}
                    </ul>
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputRiwayatPkmCom;
