


const Hero = () => {

    return (
        <div className="hero  bg-[#F8FAFC] min-h-[50vh]">
            <div className="hero-content text-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6 max-w-xl">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary"> +  Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;