import React, { useContext, useEffect, useState, useRef } from 'react'
import contactbg from '../../assets/contactlbg.png';
import enbottom from '../../assets/emailbgb.svg'
import entop from '../../assets/mailbgt.svg'
import bgg from '../../assets/bgg.png'
import bgy from '../../assets/bgy.png'
import classes from './ContactUs.module.css'
import { ThemeContext } from '../../App';
import { Button } from '../common';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
    const form = useRef();
    const [userdata, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    // const submitform = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     try {
    //         console.log('Form data being sent:', userdata);

    //         const result = await emailjs.sendForm(
    //             'service_itsmieu',
    //             'template_z73llt6',
    //             form.current,
    //             'uGwME3Uh-lIrL7h3z'
    //         );

    //         console.log('EmailJS result:', result);

    //         if (result.text === 'OK') {
    //             alert("Your mail has been sent successfully!! We will soon reach out to you");
    //             setUserData({ name: "", email: "", message: "" });
    //         }
    //     } catch (error) {
    //         console.error('EmailJS error details:', error);
    //         alert(`Couldn't send mail successfully!! Error: ${error.text}`);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }
    const submitform = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log('Form data being sent:', userdata);

<<<<<<< Updated upstream
        emailjs.sendForm('service_be3i6vf', 'template_bdi9xul', form.current, '_El3IBTU7KOivsfk4')
            .then((result) => {
                alert("Your mail has been sent successfully!! We will soon reachout to you");
                setuserdata({ name: "", email: "", message: "" })
            }, (error) => {
                console.log(error.text);
                alert("Couldn't send mail successfully!!")
            });
=======
            const result = await emailjs.sendForm(
                'service_itsmieu',
                'template_z73llt6',
                form.current,
                'uGwME3Uh-lIrL7h3z'
            );
>>>>>>> Stashed changes

            console.log('EmailJS result:', result);

            if (result.text === 'OK') {
                alert("Thank you! We've sent a confirmation email to your inbox.");
                setUserData({ name: "", email: "", message: "" });
            }
        } catch (error) {
            console.error('EmailJS error details:', error);

            // More specific error messages
            if (error.text && error.text.includes('recipients address is empty')) {
                alert("Email configuration error: Please check that your EmailJS template has 'To Email' set to {{from_email}}");
            } else {
                alert(`Couldn't send confirmation email. Error: ${error.text}`);
            }
        } finally {
            setIsLoading(false);
        }
    }

    // Fixed handleInputChange function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className={`${classes.mainb} ${theme.theme === "light" ? classes.light : classes.dark}`}>
            <img src={entop} alt="" className={classes.emailtop} data-aos="fade-down" data-aos-duration="800" />
            <img src={enbottom} alt="" className={classes.emailbottom} data-aos="fade-up" data-aos-duration="800" />
            <img src={contactbg} alt="" className={classes.bg_only} data-aos="fade-right" data-aos-delay="800" />
            <img src={bgg} alt="" className={classes.greenbg} />
            <div className={classes.abcd}>
                <img src={bgy} alt="" className={classes.yellowbg} />
            </div>

            <div className={classes.insisemail} data-aos="fade-up" data-aos-delay="800">
                <p className={classes.pques}>Got A Question?</p>
                <p className={classes.contact}>Contact <span style={{ color: "rgba(234, 67, 53, 1)" }}>G</span><span style={{ color: "rgba(52, 168, 83, 1)" }}>D</span><span style={{ color: "rgba(251, 188, 4, 1)" }}>G</span><span style={{ color: "rgba(66, 133, 244, 1)" }}>C</span>!</p>
<<<<<<< Updated upstream
                <p className={classes.would_love}>We would love to hear from you! Please feel free to reach out to us
                    with any questions or comments using the contact form below.</p>
=======
                <p className={classes.would_love}>We would love to hear from you! Please feel free to reach out to us with any questions or comments using the contact form below.</p>
>>>>>>> Stashed changes

                <div className={classes.main_contact} data-aos="flip-left" data-aos-delay="800">
                    <form className={classes.contactform} onSubmit={submitform} ref={form}>
                        <label className={classes.label}>Name</label>
                        <input
                            type='text'
                            className={classes.input}
                            required
                            value={userdata.name}
                            onChange={(e) => setUserData({ ...userdata, name: e.target.value })}
                            name="from_name"
                        />
                        <label className={classes.label}>Email Address</label>
                        <input
                            type='email'
                            className={classes.input}
                            required
                            value={userdata.email}
                            onChange={(e) => setUserData({ ...userdata, email: e.target.value })}
                            name="from_email"
                        />
                        <label className={classes.label}>Message</label>
                        <textarea
                            className={classes.doit}
                            required
                            value={userdata.message}
                            onChange={(e) => setUserData({ ...userdata, message: e.target.value })}
                            name="message"
                            rows="5"
                        />
                        <button
                            type='submit'
                            className={classes.submit}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className={classes.backall}>
                <p className={classes.sponsor} data-aos="zoom-out">Sponsor Us</p>
<<<<<<< Updated upstream
                <p className={classes.talk} data-aos="fade-up">By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility. </p>

                <Button label='Sponsor US' margin="40px" dataaos="flip-up" onClick={() => { window.open("mailto:dsc.dypcoe@gmail.com", "_blank") }} />
=======
                <p className={classes.talk} data-aos="fade-up">By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility.</p>
                <Button
                    label='Sponsor US'
                    margin="40px"
                    dataaos="flip-up"
                    onClick={() => { window.open("mailto:dsc.dypcoe@gmail.com", "_blank") }}
                />
>>>>>>> Stashed changes
            </div>
        </div>
    )
}