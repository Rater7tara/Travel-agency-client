const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-blue-900 mb-2 text-1xl">--- {subHeading} ---</p>
            <h3 className="text-3xl border-y-4 py-4 font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;