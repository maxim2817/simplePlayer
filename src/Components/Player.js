import React from 'react'
import classes from './Player.module.scss';
import Pause from './Pause.js';
import song1 from './songs/Brianstorm.mp3';
import song2 from './songs/TeddyPicker.mp3';
import svg_prev from '../prev.svg';
import svg_next from '../next.svg';

class Player extends React.Component {
	state = {
		song_names: ['Brianstorm', 'Teddy Picker'],
		songs_durations: ['02:52','02:45'],
		songIndex: 0,
		autoRepeat: false,
		isPaused: true,
	}
	constructor(props) {
		super(props);
		this.songs = [song1, song2];

		this.audio = new Audio(this.songs[this.state.songIndex]);
		// this.audio.volume = .1;
		this.audio.currentTime = 168;

		this.audio.onended = ()=>{
			this.audio.currentTime = 0;
			// this.state.isPaused = true;
			if (this.state.autoRepeat) {
				this.audio.play();
			} else {
				this.setState({isPaused: true});
			}

			// this.audio.play();
			// this.state.isPaused = !this.state.isPaused;
			// console.log(this.audio);
		};
		this.audio.ontimeupdate = ()=>{
			// vm.generateTime();
			// console.log(this.audio);
		};
	}

	// 145.59989
	// 02:45
	// Converting 01:59 format to seconds only format
	// max_dur = +props.max_dur.slice(0, 2)*60 + +props.max_dur.slice(3, 5);
	componentDidUpdate() {
		console.log('Upd');
	}
	componentDidMount() {
		console.log('Mount');
		// for (var key in this.audio) {
		// 	if (typeof this.audio[key] === "number") {
		// 		console.log(key);
		// 	}
		// }
	}

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


						<Pause
							// max_dur={this.audio.duration}
							onClick={()=>this.setPause(this.state.isPaused)}
							isPaused={this.state.isPaused}
							audio={this.audio}
							className={classes.btn + ' ' + classes.Paused + ' ' + classes.main}
						/>


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
