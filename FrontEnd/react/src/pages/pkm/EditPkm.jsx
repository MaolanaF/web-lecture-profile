// EditPkms.js
import React from "react";
import { useParams } from 'react-router-dom';
import EditPkmCom from "../../components/pkm/EditPkmCom";

function EditPkm(){
  const { id } = useParams();
  return <EditPkmCom id={id}/>
  
}

export default EditPkm;
