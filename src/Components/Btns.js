import React, {useState} from 'react';
import classes from './Btns.module.scss';
import svg_pause from '../pause.svg';
import svg_prev from '../prev.svg';
import svg_play from '../play.svg';
import svg_next from '../next.svg';

export default props => {
	const [isPaused, setPause] = useState(true);

	if (isPaused) {
		// audio.currentTime = (maxduration * percentage) / 100;
		props.audio.pause();
		return (
			<div className={classes.Btns}>
				<div className={classes.btn + ' ' + classes.prev}>
					<img src={svg_prev} alt="#"/>
				</div>
				<div onClick={()=>setPause(!isPaused)} className={classes.btn + ' ' + classes.Paused + ' ' + classes.main}>
					<img src={svg_play} alt="#"/>
				</div>
				<div className={classes.btn + ' ' + classes.next}>
					<img src={svg_next} alt="#"/>
				</div>
			</div>
		);
	} else {
		props.audio.play();

		return (
			<div className={classes.Btns}>
				<div className={classes.btn + ' ' + classes.prev}>
					<img src={svg_prev} alt="#"/>
				</div>
				<div onClick={()=>setPause(!isPaused)} className={classes.btn + ' ' + classes.noPaused + ' ' + classes.main}>
					<img src={svg_pause} alt="#"/>
				</div>
				<div className={classes.btn + ' ' + classes.next}>
					<img src={svg_next} alt="#"/>
				</div>
			</div>
		);
	}
}
