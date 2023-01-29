import { useState } from "react";

const IndexPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  )
  return <img src={catImageUrl} />;
};

export default IndexPage;
