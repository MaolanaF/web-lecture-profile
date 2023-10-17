import DosenProfile from "../components/DosenProfile";
import { useParams } from "react-router-dom";

function Profile() {
  const { id_dosen } = useParams();
  return (
    <>
      <DosenProfile id={id_dosen} />
    </>
  );
}

export default Profile;
