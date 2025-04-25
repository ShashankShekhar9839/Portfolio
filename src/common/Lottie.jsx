import { Player } from "@lottiefiles/react-lottie-player";

const LottieIcon = ({ animationData }) => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "300px", width: "300px" }}
    />
  );
};

export default LottieIcon;
