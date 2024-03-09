import Link from "next/link";
import Image from "next/image";

interface IconProps {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function ButtonIcon({href, src, alt, width, height}: IconProps) {
    return (
        <Link className="block " href={href}>
            <Image className="hover:fill-white" src={src} alt={alt} width={width} height={height} />
        </Link>
    );
}