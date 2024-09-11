import React from 'react'

const DateTime = () => {
    const today = new Date()
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);
    let hours = today.getHours();
    const minutes = today.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
  return (
    <div className='inline text-white '>
       | {formattedDate} | {formattedTime}
    </div>
  )
}

export default DateTime