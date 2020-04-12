import React from 'react'
import classes from './Player.module.scss';
import Pause from './Pause.js';
import song1 from './songs/Brianstorm.mp3';
import song2 from './songs/TeddyPicker.mp3';
import song3 from './songs/DisforDangerous.mp3';
import svg_prev from '../prev.svg';
import svg_next from '../next.svg';

class Player extends React.Component {
	state = {
		song_names: ['Brianstorm', 'Teddy Picker', 'D is for Dangerous'],
		songs_durations: ['02:52','02:45', '02:00'],
		songIndex: 0,
		autoRepeat: false,
		isPaused: true,
	}
	constructor(props) {
		super(props);
		this.songs = [song1, song2, song3];

		this.audio = new Audio(this.songs[this.state.songIndex]);
		this.audio.volume = .05;
		this.audio.currentTime = 0;

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
	componentDidUpdate(prevProps, prevState) {
		if (this.state.songIndex !== prevState.songIndex) {
			console.log(`Prev song: ${prevState.songIndex} Current song: ${this.state.songIndex}`);
		}
	}
	componentDidMount() {
		console.log('Mounted');
	}

	nextSong() {
		this.audio.currentTime = 0;

		if (this.state.songIndex === this.songs.length-1) {
			this.setState({songIndex: 0});
			this.audio.src = this.songs[0];
		} else {
			this.setState({songIndex: this.state.songIndex+1});
			this.audio.src = this.songs[this.state.songIndex+1];
		}
	}
	prevSong() {
		this.audio.currentTime = 0;

		if (this.state.songIndex === 0) {
			this.setState({songIndex: this.songs.length-1});
			this.audio.src = this.songs[this.songs.length-1];
		} else {
			this.setState({songIndex: this.state.songIndex-1});
			this.audio.src = this.songs[this.state.songIndex-1];
		}
	}
	setPause() {
		this.setState({isPaused: !this.state.isPaused})
	}

	// audio.currentTime = (maxduration * percentage) / 100;

	render(){
		return (
			<div>
				<div className={classes.Player}></div>
				<div className={classes.Gradient}>
					<div className={classes.Btns}>
						<div
							onClick={()=>this.prevSong()}
							className={classes.btn + ' ' + classes.prev}
						>
							<img src={svg_prev} alt="#"/>
						</div>


						<Pause
							// max_dur={this.audio.duration}
							onClick={()=>this.setPause(this.state.isPaused)}
							isPaused={this.state.isPaused}
							audio={this.audio}
							className={classes.btn + ' ' + classes.Paused + ' ' + classes.main}
						/>


						<div
							onClick={()=>this.nextSong()}
							className={classes.btn + ' ' + classes.next}
						>
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
