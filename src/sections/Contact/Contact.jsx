import LottieIcon from "../../common/Lottie";
import styles from "./ContactStyles.module.css";
import contact from "../../assets/lottie-animations/contact.json";
import { Mail, PhoneOutgoing } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <p className={styles.contactOverView}>
        Let's create something amazing together! Drop me a message anytime!!
      </p>
      <div className={styles.contactDetails}>
        <a href="mailto: dj78390@gmail.com">
          <Mail size={20} />

          <span>dj78390@gmail.com</span>
        </a>
        <a href=" tel: +919839633382">
          <PhoneOutgoing size={20} />
          <span>+91 9839633382</span>
        </a>
      </div>
      <div className={styles.contact}>
        <LottieIcon animationData={contact} />
      </div>
    </section>
  );
}

export default Contact;
