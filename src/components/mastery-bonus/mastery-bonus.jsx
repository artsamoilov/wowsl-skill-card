const MasteryBonus = ({isCurrent, currentLevel, maxLevel, bonus, bonusValue, rarity}) => (
  <li className={`skill-card__mastery-level ${isCurrent ? "skill-card__mastery-level--current" : "skill-card__mastery-level--next"}`}>
    <div className="skill-card__mastery-header">

      {
        isCurrent ?
          <img className="skill-card__mastery-icon" width="32" height="32" src={`img/icon-mastery-${currentLevel}.svg`} alt={`${currentLevel} level of mastery`}/> :
          <img className="skill-card__mastery-icon" width="32" height="32" src={`img/icon-mastery-${Number(currentLevel) + 1}.svg`} alt={`${Number(currentLevel) + 1} level of mastery`}/>
      }

      {
        isCurrent ?
          <h3 className="skill-card__mastery-title">
            Mastery&nbsp;
            <span className="skill-card__mastery-rank-current">{currentLevel}</span>
            /
            <span className="skill-card__mastery-rank-total">{maxLevel}</span>
          </h3> :
          <h3 className="skill-card__mastery-title">
            Upgrade on {rarity} rank <span className="skill-card__mastery-rank-next">{Number(currentLevel) + 1}</span>
          </h3>
      }

    </div>
    <div className="skill-card__mastery-bonus">
      <p className="skill-card__mastery-bonus-title">{bonus}</p>
      <span className="skill-card__mastery-bonus-line"></span>
      <span className="skill-card__mastery-bonus-value">{bonusValue}</span>
    </div>
  </li>
);

export default MasteryBonus;
