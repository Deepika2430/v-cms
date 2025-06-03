import PageHeader from "../components/PageHeader";

const Embedsys = () => {
  return (
    <>
      <PageHeader title="Embedded Systems Development" />

      <section className="px-8 md:px-24 py-10 space-y-8 text-black font-questrial ">
        {/* Program Intro */}
        <div>
          <h2 className="text-4xl font-extrabold leading-[60px] text-black">
            Embedded systems engineer job readiness program. <br />
            <span className="block mt-2 text-4xl font-extrabold">
              Become a Job-Ready Embedded Systems Engineer.
            </span>
          </h2>
        </div>

        {/* Program Overview */}
        <div>
          <h4 className="text-xl font-extrabold underline mb-2 text-black">Program Overview</h4>
          <p className="mb-4">
            As embedded systems became increasingly complex and integrated into critical
            infrastructure/devices—from cars, wearables to home automation and industrial
            machines—the need for engineers to understand both the technical aspects of
            embedded development and the domain-specific requirements has grown
            significantly.
          </p>
          <p>
            Our program equips you with hands-on skills and real-world experience you need
            to become a confident embedded systems engineer. Starting fresh or making a
            career transition, we’re here to support you.
          </p>
        </div>

        {/* Career Support */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-xl font-extrabold underline mb-2 text-black">
              Career Support and Placement Help
            </h4>
            <p className="mb-2 font-semibold">Finish with Skills That Speak Louder Than a Degree</p>
            <ul className="list-disc list-inside space-y-1">
              <li>📄 Resume and portfolio reviews</li>
              <li>🎯 Mock technical interviews and mentorship for job interviews</li>
              <li>🤝 Referrals to hiring partners</li>
              <li>🛠️ Career roadmap workshops</li>
              <li>— Industry-level projects in your portfolio</li>
              <li>— Embedded Systems Qualification Program</li>
            </ul>
          </div>
          <img
            src="https://vismayee.com/wp-content/uploads/2025/04/business-people-holding-word-careers-2-768x413.jpg"
            alt="Group of professionals holding CAREERS signage"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Program Format */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-extrabold underline mb-2 text-black">Program Format & Schedule</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>🖥️ Format: Offline - Instructor-Led in class training</li>
              <li>🕒 Duration: 6 months</li>
              <li>🔄 Hands-on assignments</li>
              <li>📞 Mentor check-ins and discussions</li>
            </ul>

            <h4 className="text-xl font-extrabold underline mt-6 mb-2 text-black">
              Invest in Skills That Pay Off for a Lifetime
            </h4>
            <ul className="list-disc list-inside space-y-2 font-bold">
              <li>
                <strong className="text-xl font-extrabold text-black">📞 Call / WhatsApp: +91 6303020761</strong>
              </li>
              <li>
                <strong className="text-xl font-extrabold text-black">📧 Email: vismayee.edu@gmail.com</strong>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
          <img
            src="https://vismayee.com/wp-content/uploads/2025/04/blue-alarm-clock-yellow-background-top-view-768x512.jpg"
            alt="Alarm clock representing schedule timing"
            className="rounded-full md:w-64 md:h-64 w-40 h-40 object-cover"
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default Embedsys;
