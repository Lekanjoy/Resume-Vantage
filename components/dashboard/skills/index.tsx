import React from 'react'
import Button, { ButtonProps as SkillsProps } from '../button'

const Skills = ({currentIndex, handlePrev, handleNext}: SkillsProps) => {
  return (
    <div>Skills
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  )
}

export default Skills