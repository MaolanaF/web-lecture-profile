import EditDosenComponent from "../../components/dosen/EditDosenComponent";
import { useParams } from 'react-router-dom';

function EditDosen(){
    const { id } = useParams();
    return <EditDosenComponent id={id}/>
}

export default EditDosen;