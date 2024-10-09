import Layout from '/src/components/Layout/Layout.jsx';
import Button from '/src/components/Button/Button.jsx';
import ContactForm from '/src/components/ContactForm/ContactForm.jsx'
import { Fragment, useState } from "react"
import photo from 'src/assets/foto_ANV.jpg'
import './Main.css'
export default function Main () {
    const [contactFormState, displayContactForm] = useState(false);
    return (
        <Fragment>
            <Layout className='main'>
                <div className='main-container-info'>
                    <span className='main-rectangle'/>
                    <div className='h1-container'>
                        <h1 className='main-h1'>Меня зовут Надежда</h1>
                        <h1 className='main-h1'> я веб разработчик</h1>
                    </div>
                    <p className='main-p'>я создаю высокопроизводительные, красивые веб-сайты, ориентированные
                        соответствующему бренду и удобны для людей.
                    </p>
                    <Button className={'button-form'} onClick={() => displayContactForm(true)}
                            label='Связаться со мной'/>
                </div>
                <img className='main-photo' src={photo} alt='my photo' />
            </Layout>
            {contactFormState && <ContactForm onClick={() => displayContactForm(false)}/>}
        </Fragment>
    )
}
