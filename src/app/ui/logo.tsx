import Image from 'next/image'

interface LogoDimentions {
    width: number;
    height: number;
    className?: string;
}

export default function Logo({width = 32, height = 25.6, className}: LogoDimentions) {
    return (
        <Image className={className} src="/starter-code/assets/logo.svg" alt="logo" width={width} height={height}/>
    );
}