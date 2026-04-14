import { useState } from 'react'
import styles from './Contact.module.css'

const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'E-mail',
    value: 'contato@logistica-b2b.com.br',
    href: 'mailto:contato@logistica-b2b.com.br',
  },
  {
    icon: '📞',
    label: 'Telefone',
    value: '+55 (11) 3000-0000',
    href: 'tel:+551130000000',
  },
  {
    icon: '📍',
    label: 'Endereço',
    value: 'São Paulo, SP — Brasil',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Atendimento',
    value: 'Seg–Sex: 8h às 18h',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Nome é obrigatório'
    if (!form.email.trim()) errs.email = 'E-mail é obrigatório'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'E-mail inválido'
    if (!form.message.trim()) errs.message = 'Mensagem é obrigatória'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // In a static site, redirect to mailto or integrate with a form service
    setSubmitted(true)
  }

  return (
    <section id="contato" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — info */}
          <div className={styles.info}>
            <div className="section-badge">Fale Conosco</div>
            <h2 id="contact-title" className="section-title">
              Vamos conversar sobre o seu negócio
            </h2>
            <p className={styles.desc}>
              Entre em contato com nossa equipe e descubra como podemos transformar
              sua operação logística. Respondemos em até 24 horas.
            </p>

            <ul className={styles.contactList}>
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <li key={label} className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">{icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{label}</span>
                    {href ? (
                      <a href={href} className={styles.contactValue}>{value}</a>
                    ) : (
                      <span className={styles.contactValue}>{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <span className={styles.successIcon} aria-hidden="true">✅</span>
                <h3 className={styles.successTitle}>Mensagem enviada!</h3>
                <p className={styles.successText}>
                  Obrigado pelo contato. Nossa equipe retornará em breve.
                </p>
                <button className="btn btn-outline-dark" onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', message: '' }) }}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Nome <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      autoComplete="name"
                    />
                    {errors.name && <span id="name-error" className={styles.error} role="alert">{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="company" className={styles.label}>Empresa</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={styles.input}
                      placeholder="Nome da empresa"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      E-mail <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      autoComplete="email"
                    />
                    {errors.email && <span id="email-error" className={styles.error} role="alert">{errors.email}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="(11) 00000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Mensagem <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Descreva sua necessidade logística..."
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className={styles.error} role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Enviar Mensagem
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
