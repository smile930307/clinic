import React from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";

import "./style.scss";

export default function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    if (result.result === "success") {
      setMessage(
        "تمام جدا, احنا كدا خلصنا - فعلى يلا انضمامك لعيلتنا عن طريق الايميل اللى بعتناهولك دلوقتى"
      );
    }

    if (result.result === "error") {
      if (email) {
        setMessage("انتى اشتركتى معانا قبل كدا");
      } else {
        setMessage("ايميلك مش صح ياست الكل");
      }
    }
  }, [result.msg]);

  function handleSubmit(email) {
    return async function(e) {
      e.preventDefault();
      const result = await addToMailchimp(email);
      setResult(result);
    };
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      {message && <blockquote className={result.result}>{message}</blockquote>}
      <div>
        <div className="newsletter-form">
          <h4>اكتبى ايميلك علشان تنضمى لعيلتنا</h4>
          <form onSubmit={handleSubmit(email)}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="ايميلك هنا ياست الكل"
            />
            <button className="button">اشتركى دلوقتى</button>
          </form>
        </div>
      </div>
    </>
  );
}
