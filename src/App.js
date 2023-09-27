import "./App.css";
import BackgroundTopDesktop from "./images/bg-pattern-top-desktop.svg";
import BackgroundBottomDesktop from "./images/bg-pattern-bottom-desktop.svg";
import BackgroundTopMobile from "./images/bg-pattern-top-mobile.svg";
import BackgroundBottomMobile from "./images/bg-pattern-bottom-mobile.svg";
import Rating from "./components/Rating";
import Testimonial from "./components/Testimonial";
import ColtonAvatar from "./images/image-colton.jpg";
import IreneAvatar from "./images/image-irene.jpg";
import AnneAvatar from "./images/image-anne.jpg";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
	const { width, height } = useWindowDimensions();
	let step1 = 30;
	let step2 = 60;
	if (width < 1200) {
		step1 = 0;
		step2 = 0;
	}
	return (
		<div className="App">
			<div className="backgroundDesktop">
				<img
					className="backgroundTopDesktop"
					src={BackgroundTopDesktop}
					alt="background-top"
				/>
				<img
					className="backgroundBottomDesktop"
					src={BackgroundBottomDesktop}
					alt="background-bottom"
				/>
			</div>
			<div className="backgroundMobile">
				<img
					className="backgroundTopDesktop"
					src={BackgroundTopMobile}
					alt="background-top"
				/>
				<img
					className="backgroundBottomDesktop"
					src={BackgroundBottomMobile}
					alt="background-bottom"
				/>
			</div>
			<section className="socialProof">
				<div className="socialProofTop">
					<div className="topText">
						<h1>10,000+ of our users love our products.</h1>
						<p>
							We only provide great products combined with excellent customer
							service. See what our satisfied customers are saying about out
							services.
						</p>
					</div>
					<div className="topRatings">
						<Rating margin={step2} text="Reviews" />
						<Rating margin={step1} text="Report Guru" />
						<Rating text="BestTech" />
					</div>
				</div>
				<div className="testimonials">
					<Testimonial
						avatar={ColtonAvatar}
						name="Colton Smith"
						description="Verified buyer"
						text="We needed the same printed design as the oe we had ordered a week prior. Not only did they find the original order,  but we also recieved it in time. Excellent!"
					/>
					<Testimonial
						margin={step1}
						avatar={IreneAvatar}
						name="Irene Roberts"
						description="Verified Buyer"
						text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of the delivery."
					/>
					<Testimonial
						margin={step2}
						avatar={AnneAvatar}
						name="Anne Wallace"
						description="Verified Buyer"
						text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
