import leftArrow from '../assets/left-arrow.svg';

export default function PrevNav() {
  return (
    <div className="nav-prev">
      <img src={leftArrow} alt="" className="left-arrow" height="20" />
      <p>Retour au menu</p>
    </div>
  );
}
