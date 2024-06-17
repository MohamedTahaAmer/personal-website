import "./wave.css"
const Wave = () => {
	return (
		<div className="waveWrapper waveAnimation opacity-10">
			<div className="waveWrapperInner bgTop">
				<div
					className="wave waveTop"
					style={{
						backgroundImage: "url('/CSS/wave-top.png')",
					}}
				></div>
			</div>
			<div className="waveWrapperInner bgMiddle">
				<div
					className="wave waveMiddle"
					style={{
						backgroundImage: "url('/CSS/wave-bot.png')",
					}}
				></div>
			</div>
			<div className="waveWrapperInner bgBottom">
				<div
					className="wave waveBottom"
					style={{
						backgroundImage: "url('/CSS/wave-bot.png')",
					}}
				></div>
			</div>
		</div>
	)
}

export default Wave
