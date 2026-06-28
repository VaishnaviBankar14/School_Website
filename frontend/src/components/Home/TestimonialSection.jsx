import "./TestimonialSection.css";

function TestimonialSection() {

  const testimonials = [
    {
      name: "Anita Sharma",
      role: "Parent",
      text: "Bright Future Public School has helped my child grow academically and personally. The teachers are very supportive."
    },
    {
      name: "Rahul Patil",
      role: "Alumni",
      text: "The school gave me confidence and leadership skills that continue to help me in my career."
    },
    {
      name: "Sneha Kulkarni",
      role: "Parent",
      text: "Excellent infrastructure, disciplined environment and modern teaching methods. Highly recommended."
    }
  ];

  return (
    <section className="testimonial-section">

      <div className="container">

        <div className="text-center mb-5">

          <h6 className="section-subtitle">
            TESTIMONIALS
          </h6>

          <h2 className="section-title">
            What Parents Say
          </h2>

        </div>

        <div className="row g-4">

          {testimonials.map((item, index) => (

            <div className="col-lg-4" key={index}>

              <div className="testimonial-card">

                <div className="quote">
                  ❝
                </div>

                <p>
                  {item.text}
                </p>

                <h5>
                  {item.name}
                </h5>

                <span>
                  {item.role}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialSection;