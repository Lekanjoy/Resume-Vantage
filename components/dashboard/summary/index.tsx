import React from 'react'
import Button, { ButtonProps as SummaryProps} from '../button'

const Summary = ({currentIndex, handleNext, handlePrev}: SummaryProps) => {
  return (
    <div>Summary
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

export default Summary