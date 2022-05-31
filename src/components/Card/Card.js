import React from 'react';

function Card({cardData}) {
    return (
        <>
            {
                cardData.map((d, i) => 
                <div className="doctors">
                    <div className="col-lg-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
                            <div className="member-info">
                                <h4>
                                    {d.name}
                                </h4>
                                <span>
                                    {d.post}
                                </span>
                                <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
}

export default Card;