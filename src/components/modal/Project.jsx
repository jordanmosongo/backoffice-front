import React from 'react';
import { Modal } from 'semantic-ui-react';
import Bouton from '../bouton/Bouton';
import Input from '../input/Input';
import './project.scss';

const Project = ({open, close}) => {
    return (
        <Modal open={open}>
          <Modal.Header>
             <h2 className="modal__title"> Add a new project</h2>
            </Modal.Header>
        <Modal.Content >
            <Modal.Description>
              <form className="ui form">
                  <Input name = 'projectTitle' placeholder='Project title'/>
                  <textarea name = 'projectContext' placeholder = 'context of project' className='textarea'></textarea>
                  <div className='modal__action'>
                    <Bouton title='Add' handleClick = {()=> alert('vous allez ajouter')}/>
                    <Bouton title = "close" handleClick = {()=> close()}/>
                  </div>
              </form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )
}

export default Project;
