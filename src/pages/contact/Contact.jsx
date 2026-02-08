import React from 'react'

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookMessenger,
  FaWhatsapp,
  FaTelegram,
  FaDribbble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import { personalInfo } from '../../data';

import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>

          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc"><a href="mailto:hounkpatindewanouhuguesmarie@gmail.com">hounkpatindewanouhuguesmarie@gmail.com</a></h4>
              </div>
            </div>

            <div className="info__item">
            <FaPhoneSquareAlt className='info__icon' />

            <div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc"><a href="tel:+2290146097120">+229 0146097120</a></h4>
            </div>
          </div>
          </div>

          <div className='contact__socials'>
            {/* Messenger : utilise ton nom d'utilisateur Facebook ou l'ID de ta page */}
            <a href='https://m.me/hugues.hounkpatin' target='_blank' rel='noreferrer' className='contact__social-link'>
                <FaFacebookMessenger />
            </a>

            {/* WhatsApp : utilise ton numéro au format international sans le + (ex: 229XXXXXXXX) */}
            <a href='https://wa.me/2290146097120' target='_blank' rel='noreferrer' className='contact__social-link'>
                <FaWhatsapp />
            </a>

            {/* Telegram : utilise ton nom d'utilisateur sans le @ */}
            <a href='https://t.me/hugueshounkpatin' target='_blank' rel='noreferrer' className='contact__social-link'>
                <FaTelegram />
            </a>

            {/* Dribbble (lien vers ton profil si existant) */}
            <a href='/' target='_blank' rel='noreferrer' className='contact__social-link'>
                <FaDribbble />
            </a>
        </div>

        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input 
                type='text' 
                placeholder='Your Name' 
                className='form__control' 
              />
            </div>

            <div className='form__input-div'>
              <input 
                type='text' 
                placeholder='Your Email' 
                className='form__control' 
              />
            </div>

            <div className='form__input-div'>
              <input 
                type='text' 
                placeholder='Your Subject' 
                className='form__control' 
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea 
              placeholder='Your Message' 
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact