import Button from "./Button";

const Content = () => {
    return (
        <div className="relative flex flex-col w-full py-10">
            {/* Dark section */}
            <div className="flex flex-col items-center justify-center text-center border rounded-t-3xl bg-[#171717] px-6 sm:px-10 lg:px-20 min-h-[50vh] py-20">
                <p className="text-2xl sm:text-3xl font-semibold max-w-4xl text-white">
                    Design and build your full-stack web app visually - no coding required.
                </p>
                <p className="mt-4 max-w-3xl text-white">
                    Take the first steps towards effortless full-stack development. Read the 
                    <a className="font-bold underline decoration-solid underline-offset-3 ml-1" href="#"> docs  </a> 
                    and get started!
                </p>
            </div>

            {/* Sky blue section */}
            <div className="flex flex-col items-center justify-center text-center w-full bg-sky-600 text-white px-6 sm:px-10 lg:px-20 min-h-[50vh] py-20">
                <p className="font-semibold text-xl sm:text-2xl max-w-3xl">
                    Drag, Drop, and customize - use our pre-built components to build your site in minutes.
                </p>
            </div>

            {/* White section */}
            <div className="flex flex-col items-center justify-center text-center w-full bg-white px-6 sm:px-10 lg:px-20 min-h-[50vh] py-20 text-black">
                <p className="font-semibold text-xl sm:text-2xl max-w-3xl">
                    Get Weekly No-Code Tips & Inspiration
                </p>
                <p className="text-md pt-4 pb-5 max-w-3xl">
                    Get inspired! Every week, we share top no-code strategies and highlight a standout app-build with our platform.
                </p>

                {/* Email input and button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Enter your email"
                        className="border rounded-md w-full sm:w-2/3 p-2"
                    />
                    <Button title="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default Content;
