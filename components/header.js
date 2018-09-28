import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <Link href={"/"}>홈</Link>
            <Link href={"/about"}>어바웃</Link>
        </div>
    )
}

export default Header;