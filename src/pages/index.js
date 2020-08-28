import { useQuery } from "react-query";
import Header from "../components/Header";
import Posts from "../components/Posts";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
};

export default IndexPage;
