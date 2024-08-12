import Info from "./Info";
import Form from "./Form";

function ContactForm() {
  return (
    <section className="px-6 py-20">
      <div className="container grid gap-10 2xl:grid-cols-2">
        <Info />

        <Form />
      </div>
    </section>
  );
}

export default ContactForm;
