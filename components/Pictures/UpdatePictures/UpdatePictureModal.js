import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import FormContainer from '../../FormContainer/FormContainer';
import FormInput from '../../FormInput/FormInput';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../../src/aws-exports';
import Button from '../../Button/Button';
import { updatePicture } from '../../../src/graphql/mutations';

Amplify.configure({ ...awsExports, ssr: true });

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UpdatePictureModal = ({
  modalIsOpen,
  setIsOpen,
  reload,
  selectedPicture = {},
}) => {
  const [picture, setPicture] = useState({});

  useEffect(() => {
    setPicture(selectedPicture);
  }, [selectedPicture]);

  const update = async () => {
    await API.graphql({
      query: updatePicture,
      variables: {
        input: {
          id: picture.id,
          web: picture.web,
          mobile: picture.mobile,
        },
      },
    });
    setIsOpen(false);
    reload();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e, name) => {
    const newPicture = { ...picture };
    newPicture[name] = e.target.value;
    setPicture(newPicture);
  };

  const isDisabled = () => {
    return ['web', 'mobile'].some((property) => !picture[property]);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Update Picture"
      >
        <div className="text-right flex justify-between">
          <div>
            <strong>Update Picture</strong>
          </div>
          <button onClick={closeModal} className={'text-white bg-red-500 p-2'}>
            Close
          </button>
        </div>
        <FormContainer>
          <div className="flex flex-col gap-1 p-2">
            <FormInput
              name={'Web'}
              label="Web"
              placeholder="Web"
              value={picture.web}
              validationError={'web is a required field'}
              onChange={(e) => handleChange(e, 'web')}
              maxLength={300}
              required
            />
            <FormInput
              name={'Mobile'}
              label="Mobile"
              placeholder="Mobile"
              value={picture.mobile}
              validationError={'mobile is a required field'}
              onChange={(e) => handleChange(e, 'mobile')}
              maxLength={300}
              required
            />
          </div>
        </FormContainer>
        <div className="text-center p-2">
          <Button disabled={isDisabled()} onClick={update}>
            Update
          </Button>
        </div>
      </Modal>
    </div>
  );
};

UpdatePictureModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  reload: PropTypes.func,
  selectedPicture: PropTypes.object,
  setIsOpen: PropTypes.func,
};

export default UpdatePictureModal;
