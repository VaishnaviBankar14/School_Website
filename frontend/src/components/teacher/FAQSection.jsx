const faqs = [
  {
    question: "Who can apply for a teaching position?",
    answer:
      "Candidates with the required educational qualifications and a passion for teaching are encouraged to apply. Freshers and experienced educators are both welcome.",
  },
  {
    question: "What documents are required?",
    answer:
      "Please upload your updated resume. Shortlisted candidates may later be asked to provide educational certificates, identity proof, and experience certificates.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Yes. Fresh graduates with strong academic backgrounds and good communication skills are encouraged to apply.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "After reviewing applications, shortlisted candidates are contacted within a few weeks for interviews and demonstration lectures.",
  },
  {
    question: "Will I receive confirmation after submitting my application?",
    answer:
      "Yes. Once your application is submitted successfully, you will receive an acknowledgment from our recruitment team.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-5 bg-white">
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
            Have questions before applying? Here are answers to some of the most
            commonly asked questions.
          </p>
        </div>

        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="col-lg-8">

            <div
              className="accordion"
              id="teacherFAQ"
            >

              {faqs.map((faq, index) => (

                <div
                  className="accordion-item border-0 shadow-sm mb-3 rounded"
                  key={index}
                >

                  <h2
                    className="accordion-header"
                    id={`heading${index}`}
                  >
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      } fw-semibold`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>

                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#teacherFAQ"
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