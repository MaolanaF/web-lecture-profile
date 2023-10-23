import EditRiwayatComponent from "../../components/pendidikan/EditPendidikanComponent"
import { useParams } from 'react-router-dom';

function EditRiwayat(){
    const { id_pendidikan } = useParams();
    return <EditRiwayatComponent id={id_pendidikan}/>
}

export default EditRiwayat;