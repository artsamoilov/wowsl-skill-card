import {mockSkills} from "../mock-data";
import React, {useState} from "react";
import SkillCard from "../skill-card/skill-card";
import SkillButtons from "../skill-buttons/skill-buttons";

const App = () => {
  const [skill, setSkill] = useState(mockSkills[0]);

  return (
    <>
      <h1 className="title">React skill card / Arthur Samoilov</h1>
      <div className="container">
        <SkillButtons setSkill={setSkill} currentSkillId={skill.id} />
        <SkillCard skill={skill} />
      </div>
    </>
  )
};

export default App;
