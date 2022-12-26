import "./index.css";
import Banner from "./Banner";
import Movies from "./Movies";
import Nav from "./Nav";
import req from "./api";
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Movies url={req.movie} big={true} title={"NetflixTrending"} />
      <Movies url={req.action} title={"NetflixAction"} />
      <Movies url={req.comedy} title={"NetflixComedy"} />
      <Movies url={req.netO} title={"NetflixPopular"} />
      <Movies url={req.horror} title={"Netflix Horror"} />
      <Movies url={req.docu} title={"Netflix Documentaries"} />
      <Movies url={req.stars} s="y" title={"Top Stars "} />
    </>
  );
}

export default App;
