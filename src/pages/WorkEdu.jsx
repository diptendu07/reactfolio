const WorkEdu = () => {
  const educationList = [
    {
      degree: "B.E. in Mechanical Engineering",
      institution: "Visvesvaraya Technological University",
      year: "2011 – 2015",
      certificateLink: "/public/be.pdf", // Path to the degree certificate
    },
    {
      degree: "Higher Secondary (10+2)",
      institution: "Sarsuna High School (WBCHSE)",
      year: "2009 – 2011",
      certificateLink: "/public/12.pdf", // Path to the 12th certificate
    },
    {
      degree: "Secondary (10th Standard)",
      institution: "South Point High School (WBBSE)",
      year: "1995 - 2008",
      certificateLink: "/public/10.pdf", // Path to the 10th certificate
    },
  ];

  const workList = [
    {
      jobTitle: "Travel Consultant",
      company: "ComfyTravels",
      duration: "October 2019 – Present",
      description: (
        <>
          <ul>
            <li>Designed and managed custom itineraries for domestic and international travel.</li>
            <li>Built client relationships and delivered tailored travel solutions.</li>
          </ul>
        </>
      ),
    },
    {
      jobTitle: "NDT Engineer, QA/QC Mechanical",
      company: "Industrial Quality Controllers",
      duration: "June 2017 – September 2019",
      description: (
        <>
          <ul>
            <li>Specialized in Ultrasonic Testing (UT) for welding joints.</li>
            <li>Conducted thorough QA/QC assessments ensuring compliance with industry standards.</li>
          </ul>
        </>
      ),
    },
    {
      jobTitle: "NDT Engineer, QA/QC Mechanical",
      company: "Test Metal Corporation",
      duration: "November 2015 – June 2016",
      description: (
        <>
          <ul>
            <li>Conducted quality testing for boilers and industrial assets at CESC, IOCL, and BPCL.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-0 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

        {/* Left Column - Education */}
        <div className="space-y-6 text-gray-300 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-white">Education</h2>
          {educationList.map((edu, index) => (
            <div key={index} className="space-y-2">
              {/* Institution on top, larger font */}
              <p className="text-2xl font-medium">{edu.institution}</p>

              {/* Degree below, smaller font */}
              <p className="text-sm">{edu.degree}</p>

              <p className="text-sm">{edu.year}</p>
              <a
                href={edu.certificateLink}
                download
                className="inline-block mt-2 py-2 px-4 bg-red-500 text-white rounded-md text-sm hover:bg-red-400 transition"
              >
                Download Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Right Column - Work Experience */}
        <div className="space-y-6 text-gray-300 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          {workList.map((work, index) => (
            <div key={index} className="space-y-2">
              <p className="text-xl font-medium">{work.jobTitle}</p>
              <p className="text-sm">{work.company}</p>
              <p className="text-sm">{work.duration}</p>
              <div className="text-sm mt-4">{work.description}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WorkEdu;
