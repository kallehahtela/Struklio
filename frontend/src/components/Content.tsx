const Content = () => {
    return (
        <div className="relative flex flex-col w-full py-25">
            <div className="flex flex-col border rounded-t-3xl bg-[#171717]">
                <p className="p-10 text-2xl text-white">
                    Design and build your full-stack web app visually - no coding required.
                </p>
                <p className="pl-10 pb-10 text-white">
                    Take the first steps towards effortless full-stack development. Read the  <a className="font-bold underline decoration-solid underline-offset-3" href="#">docs</a> and get started!
                </p>
            </div>

            {/* another color */}
            <div className="relative flex flex-col w-full bg-sky-600 text-white">
                <div className="flex flex-col pl-10 py-10">
                    <p className="font-semibold text-xl">
                        Drag, Drop, and customize - use our pre-built components to build your site in minutes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;