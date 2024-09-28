import Report1 from "../../assets/4- TREND REPORTS/Covers/cover-1.png";
import Report1File from "../../assets/4- TREND REPORTS/Art in Hospitality Spaces.pdf";
import Report2 from "../../assets/4- TREND REPORTS/Covers/cover (1)-1.png";
import Report2File from "../../assets/4- TREND REPORTS/Beyond Walls - Hospitality-driven Workspace Design.pdf.pdf";
import Report3 from "../../assets/4- TREND REPORTS/Covers/TREND REPORTS (4)-1.png";
import Report3File from "../../assets/4- TREND REPORTS/Dining at the Dorchester.pdf";
import Report4 from "../../assets/4- TREND REPORTS/Covers/Screenshot 2024-09-09 163808.png";
import Report4File from "../../assets/4- TREND REPORTS/Experiential Design - 10 steps.pdf";
import Report5 from "../../assets/4- TREND REPORTS/Covers/FUTURE-PROOFING Retail 2023-1-1.png";
import Report5File from "../../assets/4- TREND REPORTS/FUTURE-PROOFING Retail 2023.pdf";

import Button from "../Shared/Button";

const reports = [
    {
        title: "Art in Hospitality Spaces",
        image: Report1,
        file: Report1File
    },
    {
        title: "Beyond Walls - Hospitality-driven Workspace Design",
        image: Report2,
        file: Report2File
    },
    {
        title: "Dining at the Dorchester",
        image: Report3,
        file: Report3File
    },
    {
        title: "Experiential Design - 10 Steps",
        image: Report4,
        file: Report4File
    },
    {
        title: "FUTURE-PROOFING Retail 2023",
        image: Report5,
        file: Report5File
    }
];

const ReportsSection = () => {
    return (
        <div className="md:container xl:pt-48 lg:pt-36 md:pt-28 sm:pt-20 pt-14">
            <p className="text-[#D0D0D0] font-light font-houschka lg:text-[26px] md:text-xl sm:text-lg xl:mb-40 lg:mb-28 md:mb-20 mb-16 lg:pb-5 text-center md:px-0 px-5">
                Download our in-depth trend reports— Comprehensive documents designed to
                highlight recent micro and macro trends in the F&B, Hospitality and Commercial
                design industry. Download our free design insights into the strategies, research, and
                creative processes behind our award-winning designs.
                <br/>
                <br/>
                We learn with you. 
            </p>
            {reports.map((report, index) => (
                <div
                    key={index}
                    className={`flex xl:gap-[73px] lg:gap-12 gap-8 items-center flex-col-reverse lg:mb-40 md:mb-32 lg:pb-5 mb-16  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse '
                        }`}
                >
                    <div className="flex flex-col items-center md:w-auto w-full">
                        <img
                            src={report.image}
                            className="xl:min-w-[650px] xl:max-w-[650px] lg:max-w-[550px] lg:min-w-[550px]  w-full md:min-w-[380px] lg:min-h-[300px] max-h-[3000px] min-h-[195px] object-cover"
                            alt={report.title}
                        />
                        <div className="lg:hidden block sm:mt-8 mt-6">
                            <Button
                                download={`Report : ${report.title}`}
                                dir={report.file}
                                aspects="sm:size-auto size-9"
                                width={60}
                                height={64}
                                className="sm:w-[280px] w-[170px]"
                                textStyles="font-light font-houschka sm:text-lg text-[10px]"
                                title={"Download Full Report"}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-vissa lg:text-start text-center uppercase lg:text-6xl md:text-5xl sm:text-4xl text-[32px] xl:text-[64px] tracking-[0.04em] lg:mb-10">
                            {report.title}
                        </h1>
                        <div className="lg:block hidden">
                            <Button
                                download={`Report : ${report.title}`}
                                dir={report.file}
                                width={60}
                                height={64}
                                className="w-[300px]"
                                textStyles="font-light font-houschka text-lg"
                                title={"Download Full Report"}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReportsSection;
