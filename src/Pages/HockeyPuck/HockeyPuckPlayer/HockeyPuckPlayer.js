import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import HockeyPlayers from '../HockeyPlayers/HockeyPlayers'
import Slider from "react-slick/lib/slider";

import './HockeyPuckPlayer.css';


export default class HockeyPuckPlayer extends Component {


  state = {
    players: []
  }

  componentDidMount() {
    fetch('https://enigmatic-garden-34025.herokuapp.com/hockeyPuckPlayers')
      .then((response) => response.json())
      .then(playersList => {
        this.setState({ players: playersList });
      });
  }

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      pauseOnHover: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],

    };


    console.log(this.state.players);







    return (
      <div className="container AllPlayer">
        <h1 style={{marginBottom: "50px", marginTop: "100px"}}>OUR TEAM</h1>
        <div className="my-5">
          <FontAwesomeIcon
            className="me-2"
            onClick={this.previous}
            icon={faArrowLeft}
          />
          <FontAwesomeIcon
          className="me-2"
          onClick={this.next} icon={faArrowRight} />
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          
          {this.state.players.map(players => <HockeyPlayers

            key={players._id}
            player={players}

          />)
          }
        </Slider>
      </div>
    );
  }
}
