import React from 'react'
import Button, { ButtonProps as DetailsProps} from '../button'

const AdditionalDetails = ({currentIndex, handleNext, handlePrev}: DetailsProps) => {
  return (
    <div>AdditionalDetails
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

export default AdditionalDetails