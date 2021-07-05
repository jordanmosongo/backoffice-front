import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import Bouton from '../bouton/Bouton';
import image from '../card/skill7.jpg';
import './detail.scss';

const Detail = ({open, close}) => {   

  return (
    <Modal open={open}>
      <Modal.Header>
         <h2 className="modal__title"> Project title</h2>
          </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={image} wrapped />
        <Modal.Description>
          <h3>Description</h3>
          <p>
           Contexte du projet
          </p>
          <h3>Outils</h3>
          <ul>
              <li>Html5</li>
              <li>Html5</li>
              <li>Html5</li>
              <li>Html5</li>
          </ul>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Bouton title='Update' handleClick = {()=> alert('vous allez modifier')}/>
        <Bouton title = "close" handleClick = {()=> close()}/>
      </Modal.Actions>
    </Modal>
  )
}

export default Detail;
