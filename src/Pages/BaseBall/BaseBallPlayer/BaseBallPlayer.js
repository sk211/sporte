import React from 'react';
import { useNavigate } from 'react-router-dom';

const BaseBallPlayer = (props) => {

    console.log(props.player);

    const {name, img, position, nationality, id} = props.player;
console.log( props.player);


    const navigate = useNavigate();
  
    function detailsPlayer() {
      navigate(`/baseballplayer/${id}`);
    }
  

    return (
        <div className="card our-taem-card">
            <div className='card-body card-style' onClick={
                () => {
                    detailsPlayer(id);
                }}>
                <img className="card-img-top" src={img} alt="" />


                <div>

                    <div className="player-number">
                        <h1>{id}</h1>
                    </div>
                    <div>
                        <h3 className="card-title player-name">{name}</h3>
                        <p className="card-text player-title">{position || nationality} </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BaseBallPlayer;