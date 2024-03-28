import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-10'>Contact Us</h2>
            <div className='mt-8 pt-5 text-center bg-[#8a7ea7] w-full h-[200px] rounded-xl'>
                <p><span className='font-bold'>Name :</span> Team Vibe</p>
                <p><span className='font-bold'>Email :</span> teamvibe912@gmail.com</p>
                <p><span className='font-bold'>Phone :</span> +606487451521</p>
                <p><span className='font-bold'>Address :</span> Road-23, sector-5, State Country</p>
                    <hr className='ml-20 mr-20 mt-5'/>
                <div className="flex justify-center items-center mt-5">
                    <p className="mr-3 text-2xl"><FaFacebookSquare></FaFacebookSquare></p>
                    <p className="mr-3 text-2xl"><FaInstagram></FaInstagram></p>
                    <p><FaSquareTwitter className="text-2xl"></FaSquareTwitter></p>
                </div>
            
            </div>
        </div>
    );
};

export default Contact;
