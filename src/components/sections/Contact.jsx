import { useState } from 'react'
import { FileText, Send } from 'lucide-react'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import SocialLinks from '../ui/SocialLinks'
import { contactMethods, profile, socialLinks } from '../../data/profile'

const initialValues = { name: '', email: '', subject: '', message: '' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {
      name: values.name.trim() === '',
      email: values.email.trim() === '' || !emailPattern.test(values.email),
      subject: values.subject.trim() === '',
      message: values.message.trim() === '',
    }
    setErrors(nextErrors)
    return !Object.values(nextErrors).some(Boolean)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) {
      setFormStatus({ type: 'error', text: 'Please fix the errors above before sending.' })
      return
    }

    setFormStatus({ type: 'success', text: 'Thank you! Your message has been prepared (Client-Side Demo).' })

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`)}`

    setTimeout(() => {
      window.location.href = mailto
      setValues(initialValues)
      setErrors({ name: false, email: false, subject: false, message: false })
    }, 1000)
  }

  const fields = [
    { name: 'name', label: 'Your Name', placeholder: 'John Doe', errorMsg: 'Name is required.' },
    {
      name: 'email',
      label: 'Your Email',
      placeholder: 'john@example.com',
      errorMsg: 'Please enter a valid email address.',
    },
    { name: 'subject', label: 'Subject', placeholder: 'Project Inquiry / Opportunity', errorMsg: 'Subject is required.' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading label="05 / CONTACT" title="Let's Build Something." />

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-text">
              I&apos;m always interested in learning, building, and connecting with people who share an interest in
              technology. Feel free to reach out directly or drop a message!
            </p>

            <div className="contact-direct-links">
              {contactMethods.map(({ id, label, value, href, Icon }) => (
                <a key={id} href={href} className="contact-method glass-panel">
                  <Icon className="icon-accent" size={20} />
                  <div>
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            <SocialLinks
              items={socialLinks.filter((link) => link.id !== 'mail')}
              variant="text"
              className="social-links-container"
            />

            <div className="resume-cta-box">
              <p>Need a copy of my curriculum vitae?</p>
              <Button href={profile.resumeUrl} download variant="primary">
                <FileText size={16} /> Download Resume (PDF)
              </Button>
            </div>
          </div>

          <div className="contact-form-container glass-panel">
            <form id="contactForm" noValidate onSubmit={handleSubmit}>
              {fields.map(({ name, label, placeholder, errorMsg }) => (
                <div key={name} className={`form-group${errors[name] ? ' error' : ''}`}>
                  <label htmlFor={name}>{label}</label>
                  <input
                    type={name === 'email' ? 'email' : 'text'}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required
                    value={values[name]}
                    onChange={handleChange}
                  />
                  <span className="error-msg">{errorMsg}</span>
                </div>
              ))}

              <div className={`form-group${errors.message ? ' error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hi John Marc, I'd like to discuss..."
                  required
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                <span className="error-msg">Message is required.</span>
              </div>

              <Button type="submit" variant="primary" className="btn-full">
                <span>Send Message</span> <Send size={16} />
              </Button>

              {formStatus && <div className={`form-status ${formStatus.type}`}>{formStatus.text}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}