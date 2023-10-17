import EditRiwayatComponent from "../../components/pendidikan/EditPendidikanComponent"
import { useParams } from 'react-router-dom';

function EditRiwayat(){
    const { id } = useParams();
    return <EditRiwayatComponent id={id}/>
}

export default EditRiwayat;