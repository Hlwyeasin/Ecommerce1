const Service02 = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
			<path
				fill="#2F2E30"
				d="M80 40c0 22.091-17.909 40-40 40S0 62.091 0 40 17.909 0 40 0s40 17.909 40 40Zm-69.093 0c0 16.068 13.026 29.093 29.093 29.093 16.068 0 29.093-13.026 29.093-29.093S56.067 10.907 40 10.907 10.907 23.933 10.907 40Z"
				opacity=".3"
			/>
			<circle cx="40" cy="40" r="29" fill="#000" />
			<g
				stroke="#fff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				clip-path="url(#a)"
			>
				<path d="M33.333 45a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0V45ZM53.333 45a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0V45Z" />
				<path d="M26.667 45v-5a13.333 13.333 0 1 1 26.666 0v5M50 51.666c0 1.327-1.054 2.598-2.929 3.536-1.875.938-4.419 1.465-7.071 1.465" />
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M20 20h40v40H20z" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Service02;