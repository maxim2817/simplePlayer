import React from 'react'
import classes from './Player.module.sass';
import Btns from './Btns.js';
import song from './song.mp3';

export default function Player() {
	let audio = new Audio(song);
	return (
		<div>
			<div className={classes.Player}></div>
			<div className={classes.Gradient}>
				<Btns audio={audio}/>
			</div>
		</div>
	);
}
