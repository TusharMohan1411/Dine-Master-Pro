export default function Weather() {
    return (
        <section id="weather-section" className="h-full pb-5 flex flex-col">
            <div className="fixed w-full z-30 h-14">
                <h1 className="text-4xl fixed mt-3 font-bold mb-4">Weather ForeCast</h1>
            </div>
            <div className="weater-cont-main mt-20 flex flex-wrap gap-7 rounded-md overflow-y-scroll ">

            </div>
        </section>
    )
}