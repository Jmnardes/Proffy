import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/50219290?s=460&u=40069596dd38dcba9e57bb78a0f0570b8f6917c2&v=4" alt="João Marcus"/>
                <div>
                    <strong>João Marcus</strong>
                    <span>Ciência da computação</span>
                </div>
            </header>
            <p>
                Descrição do profissional aqui
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;