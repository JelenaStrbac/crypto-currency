import { FC } from "react";

type Props = {
  test?: boolean;
};

const Home: FC<Props> = ({ test }) => {
  return <div>Home</div>;
};

export default Home;
