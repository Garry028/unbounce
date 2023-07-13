import img from "../assets/img2.jpg";
import logo from "../assets/logo.svg";

const LandingPage = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-start"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="text-white px-8 w-full mx-auto md:container md:w-[65%] ">
                <div className="flex items-center justify-start"> {/* Center the logo on small screens and align to start on medium screens and above */}
                    <img src={logo} alt="Logo" className="h-44 w-44 ml-2" />
                    {/* Replace 'h-32' and 'w-32' with your actual logo size */}
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mt-8 mb-4 max-w-4xl text-teal-950"> {/* Decrease font size on small screens */}
                    Describe the <br />value of booking <br/> an appointment
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl text-teal-800"> {/* Decrease font size on small screens */}
                    No need to get clever. Tell people exactly what <br /> youre offering, then use this space to <br/>  communicate your key value proposition.
                </p>
                {/* Add more content or components as needed */}
            </div>
        </div>
    );
};

export default LandingPage;
