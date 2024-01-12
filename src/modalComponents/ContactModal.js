import React, { useState, useEffect  } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';

Modal.setAppElement("#root"); // Set the root element for accessibility

const ContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 30000); // Set the time duration in milliseconds (5 seconds in this example)

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);


  const closeModal = () => {
    setModalIsOpen(false);
  };

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  // const handleSend = (e) => {
  const sendEmail = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
      Swal.fire('warning','Username is required','warning');
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      Swal.fire('warning','Phone number is required','warning');
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      Swal.fire('warning','Please give your Email','warning');
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      Swal.fire('warning','Please give a valid email','warning');
    } else if (message === "") {
      setErrMsg("Message is required!");
      Swal.fire('warning','Message is required','warning');
    } else {
      setSuccessMsg(`
        Swal.fire('Success!', 'Your Message has been sent successfully we will contact you soon.', 'success');
        Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      const templateParams = {
        from_name: username,
        from_email: email,
        from_contact: phoneNumber,
        message: message,
      };
      emailjs
        .send(
          "service_v31fq7c",
          "template_2t2w19i",
          templateParams,
          "qLwiq-vr8M5HyXoKA"
        )
        .then(
          (result) => {
            console.log(result.text);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    // Clear messages after 5000 milliseconds (5 seconds)
    setTimeout(() => {
      setErrMsg("");
      setSuccessMsg("");
    }, 5000);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="flex justify-center p-4 mdl:p-32 lgl:p-4  xl:p-10"
      contentLabel="Contact Modal"
    >
      <div className="w-full lgl:w-[60%] h-full py-0 xl:py-12 bg-gradient-to-r from-fuchsia-950 to-gol  flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
        <form
          onSubmit={sendEmail}
          className="w-full flex flex-col gap-1 lgl:gap-3 py-4 mdl:py-6 lg:py-3"
        >
          <div className="w-full flex gap-1 lgl:gap-10">
            <div className="w-1/2 flex flex-col gap-1 lgl:gap-4">
              <p className="xs:text-sm md:text-xs mdl:text-sm text-gol uppercase tracking-wide">
                Your name
              </p>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={`${
                  errMsg === "Username is required!" && "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-1 lgl:gap-4">
              <p className="xs:text-sm md:text-xs mdl:text-sm text-gol uppercase tracking-wide">
                Phone Number
              </p>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className={`${
                  errMsg === "Phone number is required!" &&
                  "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 lgl:gap-4">
            <p className="xs:text-sm md:text-xs mdl:text-sm text-gol uppercase tracking-wide">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`${
                errMsg === "Please give your Email!" && "outline-designColor"
              } contactInput`}
              type="email"
            />
          </div>
          <div className="flex flex-col gap-1 lgl:gap-4">
            <p className="xs:text-sm md:text-xs mdl:text-sm text-gol uppercase tracking-wide">Message</p>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className={`${
                errMsg === "Message is required!" && "outline-designColor"
              } contactTextArea`}
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <div className="w-full  mdl::pt-6  md:pt-1">
            <button className="w-full xs:h-16 md:h-8 mdl:h-16 bg-black rounded-lg md:text-xs text-base mdl:text-base text-gol tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
              Send Message
            </button>
          </div>
          <div className="pt-8 lgl:pt-3">
          {errMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
          </div>

        </form>
      </div>
      <button onClick={closeModal} 
      className="text-xl pl-6 absolute xs:top-2 mdl:top-20 lg:top-6 xs:right-2 mdl:right-20 lg:right-44 xl:right-60">
        <ImCross />
      </button>
    </Modal>
  );
};

export default ContactModal;
