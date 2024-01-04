import Skill from './Skill';
import data from '../data/skills.json';

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
