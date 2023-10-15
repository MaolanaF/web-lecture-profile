import EditPenelitianComponent from "../../components/penelitian/EditPenelitianComponent";
import { useParams } from 'react-router-dom';

function EditPenelitian(){
    const { id } = useParams();
    return <EditPenelitianComponent id={id}/>
}

export default EditPenelitian;