import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import FormContainer from '../../FormContainer/FormContainer';
import FormInput from '../../FormInput/FormInput';
import SelectInput from '../../SelectInput/SelectInput';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../../src/aws-exports';
import Button from '../../Button/Button';
import { listProducts, listRanges } from '../../../src/graphql/queries';
import { createAvailability } from '../../../src/graphql/mutations';

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

const AddAvailabilityModal = ({ modalIsOpen, setIsOpen, reload }) => {
  const [avail, setAvail] = useState({});
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState([]);

  const save = async () => {
    await API.graphql({
      query: createAvailability,
      variables: {
        input: {
          ...avail,
        },
      },
    });
    setIsOpen(false);
    reload();
  };

  const listAllProducts = async () => {
    const response = await API.graphql({
      query: listProducts,
      variables: {
        limit: 1000000,
      },
    });
    const items = response?.data?.listProducts?.items || [];
    const productDisplay = [];
    productDisplay.push({
      label: '',
      value: '',
    });
    items.forEach((i) => {
      productDisplay.push({
        label: i.name,
        value: i.id,
      });
    });
    setProducts(productDisplay);
  };

  const listAllRange = async () => {
    const response = await API.graphql({
      query: listRanges,
      variables: {
        limit: 1000000,
      },
    });
    const items = response?.data?.listRanges?.items || [];
    const rangesDisplay = [];
    rangesDisplay.push({
      label: '',
      value: '',
    });
    items.forEach((i) => {
      rangesDisplay.push({
        label: `${i.start}-${i.end}`,
        value: i.id,
      });
    });
    setRange(rangesDisplay);
  };

  useEffect(() => {
    listAllProducts();
    listAllRange();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e, name, type) => {
    const newAvail = { ...avail };
    newAvail[name] =
      type === 'number' ? Number(e.target.value) : e.target.value;
    setAvail(newAvail);
  };

  const isDisabled = () => {
    return [
      'productAvailabilityId',
      'date',
      'quantity',
      'availabilityRangeId',
    ].some((property) => !avail[property]);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Availability"
      >
        <div className="text-right flex justify-between">
          <div>
            <strong>Add Availability</strong>
          </div>
          <button onClick={closeModal} className={'text-white bg-red-500 p-2'}>
            Close
          </button>
        </div>
        {/* date: "7 Oct 2022", 
    			quantity: 10, 
          productAvailabilityId: "73b3ac50-33f6-4321-bb33-b010e132d9cc",
  				availabilityRangeId: "24148887-049e-4df9-897a-1a2b15593c09" */}
        <FormContainer>
          <div className="flex flex-col gap-1 p-2">
            <SelectInput
              label="Product"
              value={avail.productAvailabilityId}
              options={products}
              placeholder="Product"
              testId="city"
              validationError={'product is a required field'}
              onChange={(e) => handleChange(e, 'productAvailabilityId')}
              required
            />
            <FormInput
              name={'Date'}
              label="Date"
              placeholder="String Date in 07 Oct 2022 format"
              value={avail.date}
              validationError={'date is a required field'}
              onChange={(e) => handleChange(e, 'date')}
              maxLength={50}
              required
            />
            <FormInput
              name={'Quantity'}
              label="Quantity"
              placeholder="Quantity"
              value={avail.quantity}
              validationError={'quantity is a required field'}
              onChange={(e) => handleChange(e, 'quantity', 'number')}
              maxLength={50}
              required
            />

            <SelectInput
              label="Range"
              value={avail.availabilityRangeId}
              options={range}
              placeholder="Range"
              testId="city"
              validationError={'range is a required field'}
              onChange={(e) => handleChange(e, 'availabilityRangeId')}
              required
            />
          </div>
        </FormContainer>
        <div className="text-center p-2">
          <Button disabled={isDisabled()} onClick={save}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddAvailabilityModal;
