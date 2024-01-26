import Container from "../../components/shared/Container";
import NoticeBord from "../../components/sidebar/NoticeBord";
// TODO: map implement baki ache

const LocationMap = () => {
  return (
    <Container>
      <div className="grid  grid-cols-3 gap-5">
        <div className="col-span-2">
          <h3 className="font-bold text-xl">অবস্থান মানচিত্র</h3>
          <h4 className="font-bold text-md">
            Welcome to CDA Girls School & College
          </h4>
          Any map
        </div>
        <NoticeBord />
      </div>
    </Container>
  );
};

export default LocationMap;
