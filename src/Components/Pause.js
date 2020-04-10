import React from 'react';
import classes from './Player.module.scss';
import svg_pause from '../pause.svg';
import svg_play from '../play.svg';

export default props => {
	if (props.isPaused) {
		props.audio.pause();
	} else {
		props.audio.play();
	}

	return (
		<div onClick={props.onClick} className={classes.btn + ' ' + classes.Paused + ' ' + classes.main}>
			{props.isPaused ? <img src={svg_play} alt="#"/> : <img src={svg_pause} alt="#"/>}
		</div>
	);
}
