import ListRiwayatPenelitianDetailComponent from "../../components/riwayat_penelitian/ListRiwayatPenelitianDetail";
import { useParams } from 'react-router-dom';

function RiwayatPenelitianDetail(){
    const { id_penelitian } = useParams();
    return <ListRiwayatPenelitianDetailComponent id={id_penelitian}/>
}

export default RiwayatPenelitianDetail;