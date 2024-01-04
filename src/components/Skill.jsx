export default function Skill({ name, logo, score }) {

  return (
    <div className="skill">
      <div className="skill-name">
        <img src={logo} className="skill-logo" alt={`${name}-logo`} />
      </div>
      <div className="skill-bar" style={{width: score + '%', opacity: score + '%' }}>
        <p>{name}</p>
      </div>
      <div className="skill-score">{score}%</div>
    </div>
  );
}

