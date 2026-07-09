function ContactMap() {
  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Find Our School
          </h2>

          <p className="text-muted">
            Visit our campus or locate us easily using Google Maps.
          </p>

        </div>

        <div className="shadow rounded overflow-hidden">

          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default ContactMap;