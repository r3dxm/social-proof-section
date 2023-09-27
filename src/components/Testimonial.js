import React from "react";
import styles from "./Testimonial.module.css";

function Testimonial(props) {
	return (
		<div style={{ marginTop: props.margin }} className={styles.container}>
			<div className={styles.header}>
				<img className={styles.avatar} src={props.avatar} alt="avatar" />
				<div className={styles.user}>
					<p className={styles.userName}>{props.name}</p>
					<p className={styles.userDescription}>{props.description}</p>
				</div>
			</div>
			<p className={styles.testimonial}>" {props.text}"</p>
		</div>
	);
}

export default Testimonial;
