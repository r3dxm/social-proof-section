import React from "react";
import styles from "./Rating.module.css";
import StarIcon from "../images/icon-star.svg";

function Rating(props) {
	return (
		<div style={{ marginRight: props.margin }} className={styles.container}>
			<div className={styles.starContainer}>
				<img src={StarIcon} alt="star-icon" />
				<img src={StarIcon} alt="star-icon" />
				<img src={StarIcon} alt="star-icon" />
				<img src={StarIcon} alt="star-icon" />
				<img src={StarIcon} alt="star-icon" />
			</div>
			<p>Rated 5 stars in {props.text}</p>
		</div>
	);
}

export default Rating;
