import React from 'react';

import { api } from '../utils/api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([resUser, resCard]) => {
                setUserName(resUser.name);
                setUserDescription(resUser.about);
                setUserAvatar(resUser.avatar);
                setCards(resCard)
            })
            .catch((err) => console.log(err))


    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar"
                        alt="Фотография пользователя" />
                    <button onClick={onEditAvatar} type="button" className="profile__avatar-button" aria-label="Редактировать аватар"></button>
                </div>

                <div className="profile__info">
                    <div className="profile__name">
                        <h1 className="profile__title">{userName}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить фотографии"></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card onCardClick={onCardClick} card={card} key={card._id} />
                ))}
            </section>


        </main>
    )
}


export default Main