import React, {Fragment, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"; // Import Link dari React Router

const ListPkmsCom = () => {
    const { id_pkm } = useParams();
    const [pkmsList, setPkms] = useState([])
    
    const deletePkm = async id => {
        try {
            // eslint-disable-next-line
            const deletePkm = await fetch(`http://localhost:3100/pkm/${id}`, {
                method: "DELETE"
            });

            setPkms(pkmsList.filter(_pkm => _pkm.id_pkm !== id))
        }catch(err){
            console.error(err.message)
        }
    }

    const getPkms = async () => {
        try {
          const response = await fetch("http://localhost:3100/pkms"); // Ganti rute API ke rute yang benar
          const jsonData = await response.json();
          setPkms(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      }
    
    useEffect(() => {
        getPkms();
    }, []);

    return (
        <Fragment>
          <h1 className="text-center mt-5">List  PKM</h1>
          <table className="table mt-5 text-center">
            <thead>
              <tr>
                <th>Id  PKM</th>
                <th>Judul PKM</th>
                <th>Tahun PKM</th>
                <th>Bidang PKM</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {pkmsList.map(_pkm => (
                <tr key={_pkm.id_pkm}>
                    <td>{_pkm.id_pkm}</td>
                    <td>{_pkm.nama_dosen}</td>
                    <td>{_pkm.judul_pkm}</td>
                    <td>{_pkm.tahun_pkm}</td>
                    <td>{_pkm.bidang_pkm}</td>
                    <td>
                    <Link to={`/pkm/edit/${_pkm.id_pkm}`} className="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={() => deletePkm(_pkm.id_pkm)}
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
    
export default ListPkmsCom;

// import React, {Fragment, useEffect, useState} from "react";
// import { Link } from "react-router-dom"; // Import Link dari React Router

// const ListPkmsCom = () => {
//     const [pkms, setPkms] = useState([])

//     const deletePkm = async id => {
//         try {
//             // eslint-disable-next-line
//             const deletePkm = await fetch(`http://localhost:3100/pkms/${id}`, {
//                 method: "DELETE"
//             });

//             setPkms(pkms.filter(pkm => pkm.id_pkm !== id))
//         }catch(err){
//             console.error(err.message)
//         }
//     }

//     const getPkms = async () => {
//         try {
//             const response = await fetch("http://localhost:3100/pkms")
//             const jsonData = await response.json()
            
//             setPkms(jsonData)
//         } catch (err) {
//             console.error(err.message)
//         }
//     }

//     useEffect(() => {
//         getPkms()
//     }, [])

//     return (
//         <Fragment>
//             <h1 className="text-center mt-5">List PKM</h1>
//             {" "}
//             <table className="table mt-5 text-center">
//                 <thead>
//                     <tr>
//                         <th>Judul PKM</th>
//                         <th>Tahun PKM</th>
//                         <th>Bidang PKM</th>
//                         <th>Link PKM</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pkms.map(pkm => (
//                         <tr key={pkm.id_pkm}>
//                             <td>{pkm.judul_pkm}</td>
//                             <td>{pkm.tahun_pkm}</td>
//                             <td>{pkm.bidang_pkm}</td>
//                             <td>
//                                 <a href={pkm.link_pkm} target="_blank" rel="noopener noreferrer">
//                                     {pkm.link_pkm}
//                                 </a>
//                             </td>
//                             <td>
//                                 <Link to={`/pkm/edit/${pkm.id_pkm}`} className="btn btn-primary">
//                                     Edit
//                                 </Link>
//                             </td>
//                             <td>
//                                 <button 
//                                     className="btn btn-danger" 
//                                     onClick={() => deletePkm(pkm.id_pkm)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </Fragment>
//     );
// }

// export default ListPkmsCom