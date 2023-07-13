import A1 from "../assets/About1.jpg";

const AboutUs = () => {
    return (
        <div className="w-full mx-auto md:container md:w-[63%] mb-20 grid grid-cols-1 md:grid-cols-2 ">
            <img src={A1} alt="Girl Photo" className="w-full h-auto" />
            <div className="flex flex-col justify-center items-start gap-5 md:ml-24">
            <p className="text-[#01c4cc] text-xs font-medium ">ABOUT</p>
            <p className="text-gray-900 text-3xl font-bold ">Some more <br/> information about <br/>your business</p>
            <p className="text-gray-900 ">Share a little about yourself as a business owner,<br/> or maybe describe what makes your service<br/> unique. Give visitors one more reason to care<br/> about your offer and want to work with you.</p>
            </div>
        </div>
    )
}
export default AboutUs