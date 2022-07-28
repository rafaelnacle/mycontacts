import PropTypes from 'prop-types';
import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  function handleRemoveToast() {
    console.log('handleRemoveToast');
  }

  return (
    <Container type={type} onClick={handleRemoveToast}>
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
