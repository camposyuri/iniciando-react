type TweetProps = {
  text: string;
};

const Tweet = ({ text }: TweetProps) => {
  return <p>{text}</p>;
};

export default Tweet;
