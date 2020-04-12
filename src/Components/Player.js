import React from 'react'
import classes from './Player.module.scss';
import Pause from './Pause.js';
import song1 from './songs/Brianstorm.mp3';
import song2 from './songs/TeddyPicker.mp3';
import song3 from './songs/DisforDangerous.mp3';
import svg_prev from '../prev.svg';
import svg_next from '../next.svg';
import { Transition } from 'react-transition-group';

let tracks = {
	names: ['Brianstorm', 'Teddy Picker', 'D is for Dangerous'],
	durations: ['02:52','02:45', '02:00'],
	songs: [song1, song2, song3]
};


class Player extends React.Component {
	state = {
		songIndex: 0,
		autoRepeat: false,
		playlistRepeat: true,
		isPaused: true,
		inProp: true
	}
	constructor(props) {

		super(props);

		this.wrapper = React.createRef();
		this.audio = new Audio(tracks.songs[this.state.songIndex]);
		this.audio.volume = .01;
		this.audio.currentTime = 0;


		// Когда песня кончится если есть авторепит одной песнии то она снова начнется
		// А если авторепит всего плейлиста, то если песня последняя была она станет первой
		this.audio.onended = ()=>{
			this.audio.currentTime = 0;

			if (this.state.autoRepeat) {
				this.audio.play();
			} else {
				if (this.state.playlistRepeat) {
					if (this.state.songIndex === tracks.songs.length-1) {
						this.setState({songIndex: 0});
						this.audio.src = tracks.songs[0];
						this.audio.play();
					} else {
						this.nextSong();
					}
				} else {
					if (this.state.songIndex === tracks.songs.length-1) {
						this.setState({isPaused: true});
					} else {
						this.nextSong();
					}
				}
			}
		};
		this.audio.ontimeupdate = ()=>{

		};
	}
	componentDidUpdate(prevProps, prevState) {
		// this.setState({inProp: !this.state.inProp});
	}
	componentDidMount() {
		console.log('Mounted');
	}

	songSwitchAnimate() {
		this.setState({inProp: !this.state.inProp});
		// setTimeout(()=>{
		// 	this.setState({inProp: !this.state.inProp});
		// },600);
	}
	nextSong() {
		this.audio.currentTime = 0;

		if (this.state.playlistRepeat) {
			if (this.state.songIndex === tracks.songs.length-1) {
				this.setState({songIndex: 0});
				this.audio.src = tracks.songs[0];
			} else {
				this.setState({songIndex: this.state.songIndex+1});
				this.audio.src = tracks.songs[this.state.songIndex+1];
			}
		} else {
			if (this.state.songIndex !== tracks.songs.length-1) {
				this.setState({songIndex: this.state.songIndex+1});
				this.audio.src = tracks.songs[this.state.songIndex+1];
				this.audio.play();
			}
		}
		this.songSwitchAnimate();
	}
	prevSong() {
		this.audio.currentTime = 0;

		if (this.state.playlistRepeat) {
			if (this.state.songIndex === 0) {
				this.setState({songIndex: tracks.songs.length-1});
				this.audio.src = tracks.songs[tracks.songs.length-1];
			} else {
				this.setState({songIndex: this.state.songIndex-1});
				this.audio.src = tracks.songs[this.state.songIndex-1];
			}
			this.songSwitchAnimate();
		} else {
			if (this.state.songIndex !== 0) {
				this.setState({songIndex: this.state.songIndex-1});
				this.audio.src = tracks.songs[this.state.songIndex-1];
			}
		}
		this.songSwitchAnimate();
	}
	setPause() {
		this.setState({isPaused: !this.state.isPaused})
	}

	render(){
		return (
			<div>
				<Transition in={this.state.inProp} timeout={300}>
				{state => (
					<div>
						<div  className={classes.Player + ' ' + classes[state]}></div>
						<div className={classes.Gradient + ' ' + classes[state]}>
							<div className={classes.Btns}>
								<div
									onClick={()=>this.prevSong()}
									className={classes.btn + ' ' + classes.prev}
								>
									<img src={svg_prev} alt="#"/>
								</div>


								<Pause
									onClick={()=>{
										this.setPause(this.state.isPaused);
										this.songSwitchAnimate();
									}}
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
					</div>
				)}
				</Transition>

				<div className={classes.SongName}>
					{tracks.names[this.state.songIndex]}
				</div>
			</div>
		);
	};
}

export default Player;
