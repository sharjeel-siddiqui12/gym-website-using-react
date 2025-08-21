const inputStyles = `focus border border-gray-100 px-4 py-2`;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();
   const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbwr-SO8k5u08wTwy27HH4dgsdYLsi1qGwRDTdzKhPUyHQZoVSXUHfo6f-NHFXJSEsEp/exec"

    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.mobile.value}&Class=${e.target.class.value}&Comment=${e.target.comment.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
    

    emailjs
      .sendForm('service_k3uycpt', 'template_cj186qv', form.current, {
        publicKey: 'q7tuq-ep_lZSHYzA_',
      })
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    // Reset form fields when user clicks Back
  const handleBack = () => {
    setIsSent(false);
    if (form.current) {
      form.current.reset();
    }
  };  

  return (
    <div className="relative">
      {isSent && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-80">
          <span className="text-2xl font-bold text-green-600 mb-4">Email sent successfully!</span>
          <button
            className="flex items-center gap-2 text-red-600 font-semibold text-lg hover:underline"
            onClick={() => setIsSent(false)}
          >
            <span className="material-icons">&#8592;</span>
            Back
          </button>
        </div>
      )}
    <form className="bg-gray-50 px-5 py-8" onSubmit={sendEmail} ref={form}>
      <h4 className="relative mb-4 mt-6 pb-2 text-2xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red">
        Leave Us Your Info
      </h4>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name*" name='name'  className={inputStyles} />
        <input
          type="text"
          name='email'
          placeholder="E-mail Address*"
          className={inputStyles}
        />
        <input
          type="number"
          name='mobile'
          placeholder="Mobile Number*"
          className={inputStyles}
        />
        <select className={inputStyles} name='class' defaultValue="">
          <option value="" disabled >
            Select Class
          </option>
          <option value="body building">Body Building</option>
          <option value="cycling">Cycling</option>
          <option value="meditation">Meditation</option>
          <option value="workout">Workout</option>
          <option value="karate">Karate</option>
        </select>
        <textarea
          name='comment'
          placeholder="Comment"
          className={`${inputStyles} h-32 max-h-44`}
        />
        <button className="self-center bg-red px-8 py-4 font-semibold uppercase text-white">
          Submit now
        </button>
      </div>
    </form>
    </div>
  );
}

export default Form;
