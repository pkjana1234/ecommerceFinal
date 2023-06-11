import React from 'react'

const WeekDeal = () => {
  return (
    <>
      <section className="week-deal my-5">
        <div className="container-fluid px-md-5">
            <div className="week-deal-bg">
                <div className="container week-container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h2>Deal Of The Week</h2>
                            <p className="text-mute">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci consequatur harum voluptates quia nobis earum eligendi magnam aspernatur praesentium.</p>
                            <h4>$35.00/<span className='fs-5'>Handbag</span></h4>

                            <button className='btn btn-outline-warning mt-3'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default WeekDeal
