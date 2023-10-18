// EditPkms.js
import React from "react";
import { useParams } from 'react-router-dom';
import EditRiwayatPkmCom from "../../components/riwayatPkm/EditRiwayatPkmCom"

function EditRiwayatPkm(){
  const { id } = useParams();
  return <EditRiwayatPkmCom id={id}/>
  
}

export default EditRiwayatPkm;
