import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practical3_1 = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-[#666666] font-sans pb-20">

            <div className="text-center mt-20">
                <div className="inline-block align-top bg-[#f4eeb1] w-[280px] p-6 pb-10 border border-[#e1d585] shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-left mx-6 relative">
                    <div className="block bg-black/80 w-[60px] h-[20px] rounded-t-md -mt-[34px] ml-[86px] shadow-sm mb-4"></div>
                    <h2 
                        className="text-center text-[#d1c87a] text-3xl font-bold mb-4 font-serif"
                        style={{ textShadow: '0 -1px 0 #fff, 0 1px 0 #666' }}
                    >
                        Sample 1
                    </h2>
                    <p className="text-sm text-gray-800 leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus temporibus expedita, doloribus assumenda modi suscipit esse amet eveniet quaerat molestias placeat. Amet ad reprehenderit libero perferendis, sunt.
                    </p>
                </div>

                <div className="inline-block align-top bg-[#f4eeb1] w-[280px] p-6 pb-10 border border-[#e1d585] shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-left mx-6 relative">
                    <div className="block bg-black/80 w-[60px] h-[20px] rounded-t-md -mt-[34px] ml-[86px] shadow-sm mb-4"></div>
                    <h2 
                        className="text-center text-[#d1c87a] text-3xl font-bold mb-4 font-serif"
                        style={{ textShadow: '0 -1px 0 #fff, 0 1px 0 #666' }}
                    >
                        Sample 2
                    </h2>
                    <p className="text-sm text-gray-800 leading-tight">
                        Commodi repellat hic, perspiciatis illo delectus, rem, cupiditate fugit ad ipsum veniam ratione eum culpa enim quisquam? Ex, eveniet, vero! Sunt dignissimos similique molestiae mollitia quos, rerum dolore magni alias.
                    </p>
                </div>

                <div className="inline-block align-top bg-[#f4eeb1] w-[280px] p-6 pb-10 border border-[#e1d585] shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-left mx-6 relative">
                    <div className="block bg-black/80 w-[60px] h-[20px] rounded-t-md -mt-[34px] ml-[86px] shadow-sm mb-4"></div>
                    <h2 
                        className="text-center text-[#d1c87a] text-3xl font-bold mb-4 font-serif"
                        style={{ textShadow: '0 -1px 0 #fff, 0 1px 0 #666' }}
                    >
                        Sample 3
                    </h2>
                    <p className="text-sm text-gray-800 leading-tight">
                        Commodi eveniet veniam, laboriosam atque odit facilis tempore rem repudiandae dicta perferendis tenetur repellat ex, molestias quae quam natus nobis sit totam, maiores dolor vero cupiditate. Amet deserunt quo?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Practical3_1;
