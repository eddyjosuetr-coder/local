import { useState, useEffect } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('#reservations .reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="reservations" className="section reservation">
      <div className="container">
        <div className="reservation-content">

          <div className="reservation-info reveal">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Reserve su Mesa</h2>
            <p>
              Experimente el arte de la gastronomía italiana. Le recomendamos reservar con
              al menos dos semanas de antelación por la alta demanda.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Teléfono</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span>reservas@velluto-ristorante.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Horario</span>
                <span>Mar–Dom: 18:00–23:30</span>
              </div>
            </div>
          </div>

          <div className="reservation-form-container reveal reveal-delay-2">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">◆</span>
                <h3>¡Reserva Confirmada!</h3>
                <p>Gracias, {formData.name}. Nos pondremos en contacto a {formData.email} para confirmar su mesa.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Nueva Reserva
                </button>
              </div>
            ) : (
              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text" name="name" placeholder=" " required
                    value={formData.name} onChange={handleChange}
                    id="f-name"
                  />
                  <label htmlFor="f-name">Nombre completo</label>
                </div>
                <div className="form-group">
                  <input
                    type="email" name="email" placeholder=" " required
                    value={formData.email} onChange={handleChange}
                    id="f-email"
                  />
                  <label htmlFor="f-email">Correo electrónico</label>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="date" name="date" required
                      value={formData.date} onChange={handleChange}
                      id="f-date"
                    />
                    <label htmlFor="f-date">Fecha</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="time" name="time" required
                      value={formData.time} onChange={handleChange}
                      id="f-time"
                    />
                    <label htmlFor="f-time">Hora</label>
                  </div>
                </div>
                <div className="form-group form-group--select">
                  <select name="guests" value={formData.guests} onChange={handleChange} id="f-guests">
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="5">5 Personas</option>
                    <option value="6+">6+ Personas (Contáctenos)</option>
                  </select>
                  <label htmlFor="f-guests">Número de personas</label>
                </div>
                <div className="form-group">
                  <textarea
                    name="message" placeholder=" " rows="3"
                    value={formData.message} onChange={handleChange}
                    id="f-message"
                  ></textarea>
                  <label htmlFor="f-message">Peticiones especiales (opcional)</label>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary btn-block ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Procesando…' : 'Confirmar Reserva'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
