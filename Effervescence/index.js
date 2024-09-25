const move = document.getElementById("move");
console.log(move);

document.body.onpointermove = (event) => {
	const { clientX, clientY } = event;

	move.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 1000, fill: "forwards" }
	);
};