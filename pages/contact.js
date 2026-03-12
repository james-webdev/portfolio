import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import Mailto from "../components/MailTo";

const Contact = () => {
  return (
    <Layout>
      <div className="h-full ml-5 mr-5 md:ml-20 md:mr-20 xl:ml-40 xl:mr-40 mt-20">
        <ContactForm />
      </div>
      <div className="text-center mt-10 mb-4">
        <button className="" type="submit">
          <div className="">
            <Mailto
              email="jamesroe.dev@gmail.com"
              subject="I have a question"
              body="Hey!"
            >
              <span className="font-bold hover:green-200 text-xl md:text-2xl hover:green-500">
                jamesroe.dev@gmail.com
              </span>
            </Mailto>
          </div>
        </button>
      </div>
      <div className="text-center mt-2 mb-28">
        <p className="text-md sm:text-2xl hover:green-500">
          +44748068447
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
