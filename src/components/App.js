import React from 'react';
import api from '../utils/api'
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <div className="popup__label">
              <input type="text" placeholder="Имя" className="popup__input popup__input_type_name" name="name"
                id="name-input" minLength="2" maxLength="40" required />
              <span className="popup__text-error name-input-error"></span>
            </div>
            <div className="popup__label">
              <input type="text" placeholder="Профессия" className="popup__input popup__input_type_job" name="about"
                id="job-input" minLength="2" maxLength="200" required />
              <span className="popup__text-error job-input-error"></span>
            </div>
          </>
        } />
      <PopupWithForm
        name='new-element'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <div className="popup__label">
              <input type="text" placeholder="Название" className="popup__input popup__input_type_text" name="name"
                id="text-input" minLength="2" maxLength="30" required />
              <span className="popup__text-error text-input-error"></span>
            </div>
            <div className="popup__label">
              <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_sourse"
                name="link" id="url-input" required />
              <span className="popup__text-error url-input-error"></span>
            </div>
          </>
        } />
      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <div className="popup__label">
            <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_name"
              name="avatar" id="avatar" required />
            <span className="popup__text-error avatar-error"></span>
          </div>
        } />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;
