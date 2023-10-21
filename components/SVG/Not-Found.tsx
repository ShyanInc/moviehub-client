import Image from "next/image";
import svgImage from "./not-found.svg"

export const PageNotFound = () => {
    return (
        <Image src={svgImage.src}
            width={500}
            height={500}
            alt="Not Found Icon"
        ></Image>
    );
};
