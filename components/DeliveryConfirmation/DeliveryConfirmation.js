const DeliveryConfirmation = ({
  personal = {},
  address = {},
  schedule = {},
  supportPhone = '',
}) => {
  return (
    <div>
      <div className="flex flex-col md:items-center">
        <div className="text-left p-2 md:text-lg text-sm">
          Delivery will be on{' '}
          <span className="font-bold">
            {schedule?.date} ,{schedule?.time}
          </span>
        </div>
        <div className="text-left p-2 md:text-lg text-sm">
          Your order will be delivered to this address.
          <span className="font-bold">
            {address?.houseNo},{address?.barangay} ,{address?.street},{' '}
            {address?.city}, {address?.postalCode}
          </span>
        </div>
        <div className="text-left p-2 md:text-lg text-sm">
          We will contact &nbsp;
          <span className="font-bold">{personal?.name}</span>&nbsp; for further
          details at &nbsp;
          <span className="font-bold">{personal?.phoneNumber}</span>
        </div>
        <div className="text-left p-2 text-sm">
          <p>
            <span className="font-bold">Note:</span> Any changes on Delivery or
            Cancellation, please contact{' '}
            <span className="font-bold">{supportPhone}</span>&nbsp;and provide
            confirmation number.
          </p>
          <p className="md:text-center">
            Update or Cancellation can only be allowed 2 days before the actual
            date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryConfirmation;
