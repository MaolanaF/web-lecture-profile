// EditPkms.js
import React from "react";
import { useParams } from 'react-router-dom';
import EditRiwayatPkmCom from "../../components/riwayatPkm/EditRiwayatPkmCom"

function EditRiwayatPkm(){
  const { id_pkm } = useParams();
  return <EditRiwayatPkmCom id={id_pkm}/>
  
}

export default EditRiwayatPkm;
