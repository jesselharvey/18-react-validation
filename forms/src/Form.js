import React, { useState } from "react"
import validator from "validator"

function Form() {
  // const [errorNote, setErrorNote] = useState(false)

  const [nameLabel, setNameLabel] = useState("Name")
  const [nameLabelErr, setNameLabelErr] = useState(false)
  const [nameText, setNameText] = useState("")
  const [nameErr, setNameErr] = useState(false)

  const [emailLabel, setEmailLabel] = useState("Email")
  const [emailLabelErr, setEmailLabelErr] = useState(false)
  const [emailText, setEmailText] = useState("")
  const [emailErr, setEmailErr] = useState(false)

  const [userLabel, setUserLabel] = useState("Username")
  const [userLabelErr, setUserLabelErr] = useState(false)
  const [userText, setUserText] = useState("")
  const [userTextErr, setUserTextErr] = useState(false)

  const [passLabel1, setPassLabel1] = useState("Password")
  const [passLabelErr1, setPassLabelErr1] = useState(false)
  const [passText1, setPassText1] = useState("")
  const [passTextErr1, setPassTextErr1] = useState(false)

  const [passLabel2, setPassLabel2] = useState("Confirm Password")
  const [passLabelErr2, setPassLabelErr2] = useState(false)
  const [passText2, setPassText2] = useState("")
  const [passTextErr2, setPassTextErr2] = useState(false)

  const [websiteLabel, setWebsiteLabel] = useState("Website")
  const [websiteLabelErr, setWebsiteLabelErr] = useState(false)
  const [websiteText, setWebsiteText] = useState("")
  const [websiteTextErr, setWebsiteTextErr] = useState(false)

  let handleForm = (e) => {
    e.preventDefault()
    if (validator.isEmpty(nameText)) {
      setNameLabel("Name - Cannot be blank")
      setNameErr(true)
      setNameLabelErr(true)
      // console.log("no name")
    } else {
      setNameLabel("Name")
      setNameErr(false)
      setNameLabelErr(false)
      // console.log("there is something")
    }

    if (validator.isEmail(emailText)) {
      setEmailLabel("Email")
      setEmailLabelErr(false)
      setEmailErr(false)
      console.log("it's an email")
    } else {
      setEmailLabel("Email - Please enter a valid email")
      setEmailLabelErr(true)
      setEmailErr(true)
      console.log("not an email")
    }

    if (validator.isEmpty(userText)) {
      setUserLabel("Username - Cannot be blank")
      setUserTextErr(true)
      setUserLabelErr(true)
    } else {
      setUserLabel("Username")
      setUserTextErr(false)
      setUserLabelErr(false)
    }

    if (validator.isEmpty(passText1)) {
      setPassLabel1("Password - Cannot be blank")
      setPassTextErr1(true)
      setPassLabelErr1(true)
    } else {
      setPassLabel1("Password")
      setPassTextErr1(false)
      setPassLabelErr1(false)
    }

    if (validator.isEmpty(passText2)) {
      setPassLabel2("Confirm Password - Cannot be blank")
      setPassTextErr2(true)
      setPassLabelErr2(true)
    } else if (!validator.equals(passText2, passText1)) {
      setPassLabel2("Confirm Password - Must match password")
      setPassLabelErr2(true)
      setPassTextErr2(true)
    } else {
      setPassLabel2("Password")
      setPassTextErr2(false)
      setPassLabelErr2(false)
    }
    if (validator.isURL(websiteText)) {
      setWebsiteLabel("Website")
      setWebsiteTextErr(false)
      setWebsiteLabelErr(false)
    } else {
      setWebsiteLabel("Website - Please enter a valid URL")
      setWebsiteTextErr(true)
      setWebsiteLabelErr(true)
    }
    // if (!validator.equals(passText2, passText1)) {
    //   setPassLabel2("Confirm Password - Must match password")
    //   setPassLabelErr2(true)
    //   setPassTextErr2(true)
    // } else {
    //   setPassLabel2("Password")
    //   setPassTextErr2(false)
    //   setPassLabelErr2(false)
    // }
  }

  return (
    <form className="container" onSubmit={handleForm} noValidate>
      <label htmlFor="name" className={nameLabelErr ? "error" : ""}>
        {nameLabel}
      </label>
      <input
        value={nameText}
        name="name"
        id="name"
        className={nameErr ? "error" : ""}
        type="text"
        onChange={(e) => setNameText(e.target.value)}
      />

      <label htmlFor="email" className={emailLabelErr ? "error" : ""}>{emailLabel}</label>
      <input
        value={emailText}
        name="email"
        id="email"
        type="email"
        className={emailErr ? "error" : ""}
        onChange={(e) => setEmailText(e.target.value)}
      />

      <label htmlFor="username" className={userLabelErr ? "error" : ""}>{userLabel}</label>
      <input
        value={userText}
        name="username"
        id="username"
        type="text"
        className={userTextErr ? "error" : ""}
        onChange={(e) => setUserText(e.target.value)}
      />

      <label htmlFor="password" className={passLabelErr1 ? "error" : ""}>{passLabel1}</label>
      <input
        value={passText1}
        name="password"
        id="password"
        type="password"
        className={passTextErr1 ? "error" : ""}
        onChange={(e) => setPassText1(e.target.value)}
      />

      <label htmlFor="passwordConf" className={passLabelErr2 ? "error" : ""}>{passLabel2}</label>
      <input
        value={passText2}
        name="passwordConf"
        id="passwordConf"
        type="password"
        className={passTextErr2 ? "error" : ""}
        onChange={(e) => setPassText2(e.target.value)}
      />

      <label htmlFor="website" className={websiteLabelErr ? "error" : ""}>{websiteLabel}</label>
      <input
        value={websiteText}
        name="website"
        id="website"
        type="url"
        className={websiteTextErr ? "error" : ""}
        onChange={(e) => setWebsiteText(e.target.value)}
      />

      <button className="submitBtn" type="submit">Submit</button>
    </form>
  )
}

export default Form
