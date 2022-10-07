const validateCheckOut = ({ personal, address }) => {
  const { name, email, phoneNumber } = personal;
  const { houseNo, street, city } = address;
  if (!name || !email || !phoneNumber) {
    return false;
  }
  if (!houseNo || !street || !city) {
    return false;
  }
  return true;
};

export default validateCheckOut;
