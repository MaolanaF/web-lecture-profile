import AdminDosenProfile from "../components/AdminDosenProfile";
import { useParams } from 'react-router-dom';

function Profile() {
  const { id_dosen } = useParams();
    return <AdminDosenProfile id={id_dosen}/>
    
}

export default Profile;
