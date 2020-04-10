import React from 'react'
import classes from './Player.module.scss';
import Pause from './Pause.js';
import song1 from './songs/Brianstorm.mp3';
import song2 from './songs/TeddyPicker.mp3';
import svg_prev from '../prev.svg';
import svg_next from '../next.svg';
import { render } from '@testing-library/react';

class Player extends React.Component {
	state = {
		song_names: ['Brianstorm', 'Teddy Picker'],
		songIndex: 1,
		isPaused: true,
	}
	constructor(props) {
		super(props);
		this.songs = [song1, song2];

		this.audio = new Audio(this.songs[this.state.songIndex]);
		this.audio.volume = 1;
	}

	// componentDidMount() {
	// 	for (var key in this.audio) {
	// 		if (typeof this.audio[key] === "number") {
	// 			console.log(key);
	// 		}
	// 	}
	// }

	addIndex(songIndexOld) {
		this.setState({songIndex: songIndexOld++})
	}
	remIndex(songIndexOld) {
		this.setState({songIndex: songIndexOld--})
	}
	setPause(isPausedOld) {
		this.setState({isPaused: !isPausedOld})
	}

	// audio.currentTime = (maxduration * percentage) / 100;

	render(){
		return (
			<div>
				<div className={classes.Player}></div>
				<div className={classes.Gradient}>
					<div className={classes.Btns}>
						<div className={classes.btn + ' ' + classes.prev}>
							<img src={svg_prev} alt="#"/>
						</div>


						<Pause onClick={()=>this.setPause(this.state.isPaused)} isPaused={this.state.isPaused} audio={this.audio} className={classes.btn + ' ' + classes.Paused + ' ' + classes.main}/>


						<div className={classes.btn + ' ' + classes.next}>
							<img src={svg_next} alt="#"/>
						</div>
					</div>
				</div>
				<div className={classes.SongName}>
					{this.state.song_names[this.state.songIndex]}
				</div>
			</div>
		);
	};
}

export default Player;
