import { NextPage } from "next";
import { useEffect, useState } from "react"

const IndexPage: NextPage = () => {
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoading(false);
        });
    }, []);
    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    }
    return (
        <div className="cat_img">
            {loading || <img src={imageUrl} />}
            <button onClick={handleClick}>もっと見る</button>
        </div>
    );
};

export default IndexPage;
type Image = {
    url: string;
}
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
};

function ViewMoreButton() {
    return (
        <button>もっと見る</button>
    )
}
