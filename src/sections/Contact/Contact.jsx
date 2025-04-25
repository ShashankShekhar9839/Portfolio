import LottieIcon from "../../common/Lottie";
import styles from "./ContactStyles.module.css";
import contact from "../../assets/lottie-animations/contact.json";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contact}>
        <LottieIcon animationData={contact} />
        <form action="">
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="dj78390@gmail.com"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
