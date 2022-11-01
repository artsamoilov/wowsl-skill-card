import MasteryBonus from "../mastery-bonus/mastery-bonus";

const SkillCard = ({skill}) => {
  return (
    <section className="skill-card">
      <header className="skill-card__header">
        <img className="skill-card__skill-image" width="96" height="100" src={skill.icon} alt={`${skill.title} skill icon`} />
        <div className="skill-card__skill-title">
          <h2 className="skill-card__skill-heading">{skill.title}</h2>
          <p className="skill-card__skill-subtitle skill-card__skill-subtitle--type">{skill.type}</p>
          <p className="skill-card__skill-subtitle skill-card__skill-subtitle--rarity">{skill.rarity} skill</p>
        </div>
      </header>
      <div className="skill-card__selection">
        {
          skill.isSelected ?
            <>
              <img className="skill-card__selection-check" width="26" height="28" src="img/icon-check.svg" alt="Check icon" />
              <p className="skill-card__selection-text">Selected</p>
            </> :
            <p className="skill-card__selection-text skill-card__selection-text--not-selected">Not selected</p>
        }
      </div>
      <p className="skill-card__description">{skill.description}</p>
      <ul className="skill-card__mastery-list">
        {
          skill.mastery.currentLevel > 0 ?
            <MasteryBonus
              isCurrent={true}
              currentLevel={skill.mastery.currentLevel}
              maxLevel={skill.mastery.maxLevel}
              bonus={skill.mastery.bonus}
              bonusValue={skill.mastery.currentBonusValue}
              rarity={skill.rarity}
            /> : ""
        }
        {
          skill.mastery.currentLevel < skill.mastery.maxLevel ?
            <MasteryBonus
              isCurrent={false}
              currentLevel={skill.mastery.currentLevel}
              maxLevel={skill.mastery.maxLevel}
              bonus={skill.mastery.bonus}
              bonusValue={skill.mastery.nextBonusValue}
              rarity={skill.rarity}
            /> : ""
        }
      </ul>
    </section>
  );
}

export default SkillCard;
