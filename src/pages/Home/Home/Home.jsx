import Container from "../../../components/shared/Container";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </Container>
    </div>
  );
};

export default Home;
