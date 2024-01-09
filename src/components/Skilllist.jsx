import Skill from './Skill';
import myApi from './config.js'

const dataJson = await fetch(`${myApi}/skills`);
let data = await dataJson.json();

data = data.sort((a, b) => {
    return b.score - a.score
});

export default function SkillList() {
  return (
    <div className="skill-list">
      {data.map((skill) => (
        <Skill
          key={`skill-${skill.id}`}
          name={skill.name}
          logo={skill.logoUrl}
          score={skill.score}
        />
      ))}
    </div>
  );
}
