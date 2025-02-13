import React from 'react'

const PlaceHolder = () => {
  return (
    <div className='col-md-3 mb-5'>
        <div className='card' aria-hidden='true'>
            <div className='place-img' style={{height: '180px', backgroundColor: 'lightgray'}}></div>
            <div className='card-body'>
                <p className='card-text place-holder-glow'>
                    <span className='place-holder col-12 placeholder-xs'></span>
                    <span className='place-holder col-12 placeholder-xs'></span>
                </p>
            </div>

        </div>

    </div>
  )
}

export default PlaceHolder