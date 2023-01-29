import { useState } from "react";

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
]

const randomCatImage = (): string => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index]
}

const fetchCatImage = async () => {
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
  const result = await res.json();
  return result[0]
}

fetchCatImage().then((image) => {
  console.log(`猫の画像: ${image.url}`);
})

const IndexPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  )
  const handleClick = () => {
    setCatImageUrl(randomCatImage())
  }
  return (
    <div>
      <button onClick={handleClick}>
        きょうのにゃんこ🐱
      </button>
      <div style={{ marginTop: 8 }}>
        <img src={catImageUrl} alt="ねこ" />
      </div>
    </div>
  )
};


export default IndexPage;
