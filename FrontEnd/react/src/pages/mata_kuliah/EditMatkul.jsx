import EditMatkulComponent from '../../components/mata_kuliah/EditMatkulComponent';
import { useParams } from 'react-router-dom';

function EditMatkul(){
    const { id } = useParams();
    return <EditMatkulComponent id={id}/>
}

export default EditMatkul;