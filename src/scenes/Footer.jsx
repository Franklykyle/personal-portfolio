import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-45 bg-teal pt-5">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md: justify-between text-center">
                    <p className="font-playfair font-semibold text-1xl text-yellow">KYLE FRANKLIN</p>
                    <p className="font-playfair text-md text-yellow">©2023 FRANKLIN. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;