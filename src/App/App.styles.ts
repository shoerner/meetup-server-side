import { StyleSheet } from "aphrodite";

const logoSpinKeyframes = {
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(360deg)" },
};

export const styles = StyleSheet.create({
	app: {
		textAlign: "center",
	},
	appHeader: {
		backgroundColor: "#222",
		color: "white",
		height: "150px",
		padding: "20px",
	},
	appIntro: {
		fontSize: "large",
	},
	appLogo: {
		animationDuration: "20s",
		animationIterationCount: "infinite",
		animationName: [logoSpinKeyframes],
		height: "80px",
	},
	appTitle: {
		fontSize: "1.5em",
	},
	party: {
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		width: "100%",
	},
});
