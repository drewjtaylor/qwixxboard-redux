const PenaltyBox = ({value}) => {
    if (value === 0) { //if the box has NOT been checked, it's value in the array will be 0
        return <div className='number-box-square'></div>
      } else {  //if the box HAS been checked, the value in the array will be 1
        return <div className='number-box-square'>X</div>
      }
    }

export default PenaltyBox