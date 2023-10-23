import React, {Fragment, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"; // Import Link dari React Router

const ListRiwayatPkmsCom = () => {
    const { id_riwayatpkm } = useParams();
    const [riwayatPkms, setRiwayatPkms] = useState([])
    
    const deleteRiwayatPkm = async id => {
        try {
            // eslint-disable-next-line
            const deleteRiwayatPkm = await fetch(`http://localhost:3100/riwayatpkm/${id}`, {
                method: "DELETE"
            });

            setRiwayatPkms(riwayatPkms.filter(riwayat_pkm => riwayat_pkm.id_riwayatpkm !== id))
        }catch(err){
            console.error(err.message)
        }
    }

    const getRiwayatPkms = async () => {
        try {
          const response = await fetch("http://localhost:3100/riwayatpkm"); // Ganti rute API ke rute yang benar
          const jsonData = await response.json();
          setRiwayatPkms(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      }
    
    useEffect(() => {
        getRiwayatPkms();
    }, []);

    return (
        <Fragment>
          <h1 className="text-center mt-5">List Riwayat PKM</h1>
          <table className="table mt-5 text-center">
            <thead>
              <tr>
                <th>Id Riwayat PKM</th>
                <th>Nama Dosen</th>
                <th>Judul PKM</th>
                <th>Tahun PKM</th>
                <th>Bidang PKM</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {riwayatPkms.map(riwayat_pkm => (
                <tr key={riwayat_pkm.id_riwayatpkm}>
                    <td>{riwayat_pkm.id_riwayatpkm}</td>
                    <td>{riwayat_pkm.nama_dosen}</td>
                    <td>{riwayat_pkm.judul_pkm}</td>
                    <td>{riwayat_pkm.tahun_pkm}</td>
                    <td>{riwayat_pkm.bidang_pkm}</td>
                    <td>
                    <Link to={`/riwayatpkm/edit/${riwayat_pkm.id_riwayatpkm}`} className="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteRiwayatPkm(riwayat_pkm.id_riwayatpkm)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
          </table>
        </Fragment>
      );
    };
    
export default ListRiwayatPkmsCom;