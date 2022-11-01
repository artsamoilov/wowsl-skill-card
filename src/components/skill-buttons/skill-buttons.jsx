import {mockSkills} from "../mock-data";
import Button from "../button/button";
import React from "react";

const SkillButtons = ({setSkill, currentSkillId}) => (
  <ul className="skill-buttons">
    {
      mockSkills.map((skillItem) => (
        <li className="skill-buttons__item" key={skillItem.id}>
          <Button skill={skillItem} setSkill={setSkill} currentSkillId={currentSkillId} />
        </li>
      ))
    }
  </ul>
);

export default SkillButtons;
