import { useState } from "react";
import { NextPage } from "next";

interface CatCategory {
  id: number;
  name: string;
}

interface SearchCatImage {
  breeds: string[];
  categories: CatCategory;
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const fetchCatImage = async (): Promise<SearchCatImage> => {
  // Docs: [TheReportAPI: Report Portal](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  /* sample res structure
    [
      {
        "breeds": [],
        "categories": [
          {
            "id": 2,
            "name": "space"
          }
        ],
        "id": "5dc",
        "url": "https://cdn2.thecatapi.com/images/5dc.jpg",
        "width": 760,
        "height": 500
      }
    ]
  */
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0]
}

interface IndexPageProps {
  initialCatImageUrl: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
  
  const handleClick = async () => {
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  }
  return (
    <div>
      <button onClick={handleClick}>
        きょうのにゃんこ🐱
      </button>
      <div style={{ marginTop: 8 }}>
        <img
          src={catImageUrl}
          width={500}
          height="auto"
          alt="ねこ" />
      </div>
    </div>
  )
};


export default IndexPage;
