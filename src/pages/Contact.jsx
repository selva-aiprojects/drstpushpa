import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const ContactContainer = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  padding: 10rem 0 16rem;
  margin-bottom: 6rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 10rem 0 6rem;
    margin-bottom: 0;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 8rem 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 7rem 0 2rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.colors.headerGradient};
  z-index: 1;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 60%;
    top: auto;
    bottom: 0;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const TextBlock = styled.div`
  color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : 'white'};
  
  h1 {
    font-size: clamp(2.2rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -2px;
    
    .accent {
      color: ${props => props.theme.colors.secondary};
    }
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : '#ffffff'};
    opacity: ${props => props.theme.mode === 'light' ? '0.8' : '0.95'};
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 2.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
    }
  }
`;

const MainGrid = styled.section`
  max-width: 1400px;
  margin: 5rem auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    gap: 3rem;
    margin: 3rem auto;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 2rem;
    margin: 2.5rem auto;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 1.5rem;
    margin: 2rem auto;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContactCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 2.5rem;
  border-radius: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 12px 35px rgba(0,0,0,0.05);
  }

  h3 {
    font-size: clamp(1.3rem, 3vw, 1.7rem);
    margin-bottom: 1.75rem;
    color: ${props => props.theme.colors.accent};
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 24px;
      background: ${props => props.theme.colors.primary};
      border-radius: 3px;
      flex-shrink: 0;
    }
  }

  .contact-section {
    margin-bottom: 1.75rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    opacity: 0.9;

    .label-icon {
      font-size: 0.95rem;
    }
  }

  .address-text {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    opacity: 0.85;
    margin-bottom: 0.5rem;
  }

  .maps-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover { opacity: 1; }
  }

  .phone-chips {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .phone-chip {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.65rem 1rem;
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      transform: translateX(6px);
      background: ${props => props.theme.colors.cardBackground};
    }

    @media (max-width: 480px) {
      padding: 0.85rem 1rem;
      gap: 0.8rem;
      
      &:hover { transform: none; }
    }

    .chip-icon {
      font-size: 1rem;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: ${props => props.theme.colors.primary}15;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.primary};
    }

    .chip-number {
      font-size: 1.05rem;
      font-weight: 700;
      color: ${props => props.theme.colors.text};
      letter-spacing: 0.2px;
      white-space: nowrap;

      @media (max-width: 375px) {
        font-size: 0.95rem;
      }
    }

    .chip-type {
      margin-left: auto;
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: ${props => props.theme.colors.primary};
      opacity: 0.9;
      background: ${props => props.theme.colors.primary}12;
      padding: 0.25rem 0.6rem;
      border-radius: 8px;
    }
  }

  .email-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem 1.25rem;
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    color: ${props => props.theme.colors.text};

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.05);
    }

    .email-icon {
      font-size: 1.1rem;
      flex-shrink: 0;
      color: ${props => props.theme.colors.primary};
    }

    .email-text {
      font-size: 0.98rem;
      font-weight: 700;
      color: ${props => props.theme.colors.text};
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 24px;
  }
`;

const FormCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 4rem;
  border-radius: 40px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: 1024px) { padding: 3rem; }
  @media (max-width: 768px) { padding: 2.5rem 2rem; border-radius: 28px; }
  @media (max-width: 480px) { padding: 2rem 1.5rem; border-radius: 24px; }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    margin-bottom: 2.5rem;
    color: ${props => props.theme.colors.accent};
  }
`;

const StyledForm = styled.form`
  display: grid;
  gap: 2rem;

  .group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    label {
      font-weight: 800;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      opacity: 0.6;
    }

    input, textarea {
      padding: 1.25rem;
      border-radius: 18px;
      border: 1px solid ${props => props.theme.colors.border};
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font-size: 1.1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.cardBackground};
        box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}11;
      }
    }
  }

  button {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 1.5rem;
    border: none;
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 30px rgba(0, 129, 255, 0.2);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 129, 255, 0.3);
      filter: brightness(1.1);
    }
  }
`;

const WHATSAPP_NUMBER = '919566293322'; // Clinic WhatsApp number

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const uhidRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uhid = uhidRef.current?.value?.trim() || '';
    const message = messageRef.current?.value?.trim() || '';

    const whatsappText = encodeURIComponent(
      `Hello Dr. S.T. Pushpa / Kidz Clinic,\n\n` +
      `*UHID:* ${uhid}\n` +
      `*Message:* ${message}\n\n` +
      `(Sent via Clinical Inquiry Form)`
    );

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
    window.open(whatsappURL, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>Contact <br /> <span className="accent">Our Clinic</span></h1>
            <p>
              Your child's health is our priority. Connect with Dr. S.T. Pushpa for expert pediatric care and consultations.
            </p>
          </TextBlock>
          <div className="floating" style={{
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
            height: 'clamp(280px, 45vw, 450px)',
            background: 'white',
            padding: '10px',
            border: '2px solid rgba(255,255,255,0.1)'
          }}>
            <iframe
              title="Kidz Clinic Map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '30px', filter: 'contrast(1.05)' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.364726451675!2d77.652968!3d13.0298652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f7ec026bf3%3A0x6773285956f5aa32!2sKidz%20Clinic%20(Dr.%20S%20T%20Pushpa)!5e0!3m2!1sen!2sin!4v1772690713114!5m2!1sen!2sin"
            ></iframe>
          </div>
        </HeroContent>
      </HeroSection>

      <MainGrid>
        <InfoPanel>
          <ContactCard>
            <h3>Direct Reach</h3>

            {/* Address */}
            <div className="contact-section">
              <div className="section-label"><span className="label-icon"><FaMapMarkerAlt /></span> Clinic Address</div>
              <p className="address-text">
                Kidz Clinic — ASR Complex, No.41 &amp; 42, 89/5,<br />
                Prakruthi Township, 1st Block,<br />
                Horamavu Agara Main Road,<br />
                Bangalore, Karnataka 560043.
              </p>
              <a
                className="maps-link"
                href="https://maps.google.com/?q=Kidz+Clinic+Dr+S+T+Pushpa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt /> Open in Google Maps →
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="contact-section">
              <div className="section-label"><span className="label-icon"><FaPhone /></span> Call / WhatsApp</div>
              <div className="phone-chips">
                <a href="tel:+919566293322" className="phone-chip">
                  <span className="chip-icon"><FaPhone /></span>
                  <span className="chip-number">+91 95662 93322</span>
                  <span className="chip-type">WhatsApp</span>
                </a>
                <a href="tel:+919148493322" className="phone-chip">
                  <span className="chip-icon"><FaPhone /></span>
                  <span className="chip-number">+91 91484 93322</span>
                  <span className="chip-type">Mobile</span>
                </a>
                <a href="tel:08025603022" className="phone-chip">
                  <span className="chip-icon"><FaPhone /></span>
                  <span className="chip-number">080-25603022</span>
                  <span className="chip-type">Landline</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-section">
              <div className="section-label"><span className="label-icon"><FaEnvelope /></span> Email</div>
              <a href="mailto:admin@drstpushpa.com" className="email-link">
                <span className="email-icon"><FaEnvelope /></span>
                <span className="email-text">admin@drstpushpa.com</span>
              </a>
            </div>
          </ContactCard>
          <ContactCard>
            <h3>Clinical Hours</h3>
            <div className="item">
              <div className="icon"><FaClock /></div>
              <div className="details">
                <h4>Monday - Saturday</h4>
                <p>11:00 AM - 1:00 PM</p>
                <p>5:00 PM - 9:00 PM</p>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Sunday Holiday</p>
              </div>
            </div>
          </ContactCard>
        </InfoPanel>

        <FormCard>
          <h2>Clinical Inquiry</h2>
          <StyledForm onSubmit={handleSubmit}>
            <div className="group">
              <label>UHID (Unique Health Identification)</label>
              <input ref={uhidRef} type="text" placeholder="Provide your Kidz Clinic ID. E.g. KCXXXX1" required />
            </div>
            <div className="group">
              <label>Message</label>
              <textarea ref={messageRef} rows="5" placeholder="Briefly describe your concern..." required></textarea>
            </div>
            <button type="submit" style={{
              background: submitted ? '#128C7E' : 'linear-gradient(135deg, #25D366, #128C7E)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.35)'
            }}>
              {submitted
                ? <><FaCheckCircle /> Opening WhatsApp...</>
                : <><FaWhatsapp style={{ fontSize: '1.4rem' }} /> Submit via WhatsApp</>}
            </button>
          </StyledForm>
        </FormCard>
      </MainGrid>

      <CTASection />
    </ContactContainer>
  );
};

export default Contact;
