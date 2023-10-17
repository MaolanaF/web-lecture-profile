import DosenProfile from "../components/DosenProfile";
import { useParams } from 'react-router-dom';
import NavbarCom from "../components/NavbarCom";

function Profile() {
  const { id_dosen } = useParams();
    <NavbarCom/>
    return <DosenProfile id={id_dosen}/>
}

export default Profile;
