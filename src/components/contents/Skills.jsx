import React from 'react';
import SkillBar from 'react-skillbars';

function skills(props) {
  const skills = [
    {
      "type": "Java",
      "level": 80,
    },
    {
      "type": "React",
      "level": 70,
    },
    {
      "type": "Javascript",
      "level": 75,
    },
    {
      "type": "Android",
      "level": 60,
    },
    {
      "type": "PHP",
      "level": 90,
    },
    {
      "type": "MYSQL",
      "level": 70,
    }
  ];

  const colors = {
    "bar": "#3498db",
    "title": {
      "text": "#fff",
      "background": "#2980b9"
    }
  }
  return (
    <div id="skills">
      <h2>
        Skills
            </h2>

      <SkillBar skills={skills} colors={colors} height={30} />
    </div>
  );
}

export default skills;