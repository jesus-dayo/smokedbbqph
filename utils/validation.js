const validateCheckOut = ({ personal, address }) => {
  const { name, email, phoneNumber } = personal;
  const { houseNo, street, city } = address;
  console.log('validateCheckOut', personal, address);
  if (!name || !email || !phoneNumber) {
    return false;
  }
  if (!houseNo || !street || !city) {
    return false;
  }
  return true;
};

export default validateCheckOut;
