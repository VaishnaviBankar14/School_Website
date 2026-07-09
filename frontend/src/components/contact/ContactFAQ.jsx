function ContactFAQ() {
  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>

          <p className="text-muted">
            Find answers to some of the most common questions asked by
            parents and students.
          </p>
        </div>

        <div
          className="accordion shadow"
          id="faqAccordion"
        >

          {/* Question 1 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                How can I apply for admission?
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Visit the <strong>Admission</strong> page, complete the
                online application form, upload the required documents,
                and submit your application for review.
              </div>
            </div>

          </div>

          {/* Question 2 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingTwo"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                What documents are required for admission?
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Required documents include Birth Certificate, Student
                Photograph, Aadhaar Card, Parent Aadhaar Card,
                Previous School Report Card, Address Proof and Transfer
                Certificate (if applicable).
              </div>
            </div>

          </div>

          {/* Question 3 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingThree"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                What are the school timings?
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                School operates from <strong>Monday to Saturday</strong>,
                between <strong>8:00 AM and 4:00 PM</strong>.
              </div>
            </div>

          </div>

          {/* Question 4 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingFour"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                Does the school provide transportation?
              </button>
            </h2>

            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. School transportation is available for selected
                routes. Please contact the school office for route
                availability and transport fees.
              </div>
            </div>

          </div>

          {/* Question 5 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingFive"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                Can parents visit the school campus?
              </button>
            </h2>

            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. Parents are welcome to visit the campus during
                office hours. We recommend scheduling an appointment
                in advance.
              </div>
            </div>

          </div>

          {/* Question 6 */}

          <div className="accordion-item">

            <h2
              className="accordion-header"
              id="headingSix"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                How can I contact the school?
              </button>
            </h2>

            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can call us during office hours, send us an email,
                or use the Contact Form available on this page. Our team
                will respond as soon as possible.
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactFAQ;