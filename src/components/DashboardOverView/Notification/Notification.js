import { BsFillCloudRainHeavyFill } from "react-icons/bs";

const Notification = () => {
    return (
        <section className="mt-[40px]">
            <p className="mb-[20px] notification__title">Redgreen Sales</p>
            <div
                className="bg-[#FFFAE1] text-[#9D8506] border-l-4 border-[#9D8506] h-[90px] p-4 flex items-center"
                role="alert"
            >
                <div className="w-[45px]">
                    <BsFillCloudRainHeavyFill className="w-full h-full text-[#E6E6E6]" />
                </div>
                <div className="ml-[21.5px]">
                    <p className="font-bold text-[14px] leading-22px">
                        Notification
                    </p>
                    <p className="font-light mt-[8px] text-[12px] md:text-[16px] leading-20px ">
                        You dont have enough stock for the next campaign
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Notification;
