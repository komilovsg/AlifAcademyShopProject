type Props = {
  name: string;
};

const Home = (props: Props) => {
  return (
    <div>
      <h1>Home {props.name}</h1>
    </div>
  );
};

export default Home;
