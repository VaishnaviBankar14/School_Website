const faqs = [
  {
    question: "When does the admission process begin?",
    answer:
      "Admissions generally begin before the start of the academic session. Please check the latest announcements or contact the school office for exact dates."
  },
  {
    question: "Can I apply online?",
    answer:
      "Yes. Parents can complete the online admission form and upload the required documents directly through our website."
  },
  {
    question: "What documents are mandatory?",
    answer:
      "Birth Certificate, previous academic records (if applicable), passport-size photographs, identity proof, and address proof are generally required."
  },
  {
    question: "Is there an entrance examination?",
    answer:
      "Depending on the class, students may be required to attend a basic assessment or interaction before admission is confirmed."
  },
  {
    question: "How will I know if my application is accepted?",
    answer:
      "Our admission office will contact you via phone or email after reviewing your application and documents."
  },
  {
    question: "Can I visit the school before applying?",
    answer:
      "Yes. Parents are encouraged to visit the campus during school hours or schedule an appointment with the admission office."
  }
];

const FAQSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold">
            Frequently Asked Questions
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Here are answers to some of the most common questions about the admission process.
          </p>
        </div>

        <div className="row justify-content-center">

          <div
            className="col-lg-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <div className="accordion" id="admissionFAQ">

              {faqs.map((faq, index) => (

                <div
                  className="accordion-item border-0 shadow-sm mb-3 rounded"
                  key={index}
                >

                  <h2 className="accordion-header">

                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      } fw-semibold`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                    >
                      {faq.question}
                    </button>

                  </h2>

                  <div
                    id={`faq${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#admissionFAQ"
                  >

                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;