import benfit1 from "../assets/ben1.svg";
import benfit2 from "../assets/ben2.svg";
import benfit3 from "../assets/ben3.svg";
import AppointmentForm from "./AppointmentForm";

const Benefits = () => {
    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-x-10 mb-20">
            <div className="lg:w-[30%]">
                <div className="flex items-start mt-8">
                    <div className="">
                        <img src={benfit1} alt="Benefit 1" className="w-12 h-auto" />
                    </div>
                    <div className="pl-4">
                        <h2 className="text-xl font-semibold mb-2">Benefit 1</h2>
                        <p className="mb-4">Include a description of Benefit 1 here.</p>
                    </div>
                </div>
                <div className="flex items-start mt-8">
                    <div className="">
                        <img src={benfit2} alt="Benefit 2" className="w-12 h-auto" />
                    </div>
                    <div className="pl-4">
                        <h2 className="text-xl font-semibold mb-2">Benefit 2</h2>
                        <p className="mb-4">Include a description of Benefit 2 here.</p>
                    </div>
                </div>
                <div className="flex items-start mt-8">
                    <div className="">
                        <img src={benfit3} alt="Benefit 3" className="w-12 h-auto" />
                    </div>
                    <div className="pl-4">
                        <h2 className="text-xl font-semibold mb-2">Benefit 3</h2>
                        <p className="mb-4">Include a description of Benefit 3 here.</p>
                    </div>
                </div>
            </div>

            <div className="text-center bg-teal-900 mx-4 mt-2 p-4 md:px-8 md:py-10 md:mt-[-100px] lg:w-[25%] ">
                <div className="max-w-md mx-auto ">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold mb-2 text-white mx-16">Schedule an Appointment</h2>
                        <p className="text-white">Here, let visitors know what will happen when they complete your form.</p>
                    </div>
                    <AppointmentForm />
                </div>
            </div>

        </div>
    );
};

export default Benefits;
