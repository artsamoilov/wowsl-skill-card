import {mockSkills} from "../mock-data";

const Button = ({skill, setSkill, currentSkillId}) => {
  const id = skill.id;

  const handleButtonClick = () => setSkill(mockSkills.find((item) => item.id === id));

  return (
    <button className={`skill-buttons__button ${currentSkillId === id ? "skill-buttons__button--active" : ""}`} onClick={handleButtonClick}>
      <img className="skill-buttons__button-image" width="48" height="50" src={skill.icon} alt={`${skill.title} skill icon`} />
      <span className="skill-buttons__button-text">{skill.title}</span>
    </button>
  )
};

export default Button;
