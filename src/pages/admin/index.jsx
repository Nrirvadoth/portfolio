import Connexion from '../../components/Connexion';
import AddContent from '../../components/AddContent'

function Admin() {
  return (
    <div className="adminpage">
      {localStorage.getItem("userToken") == null ? <Connexion /> : <AddContent />}
    </div>
  );
}

export default Admin;
