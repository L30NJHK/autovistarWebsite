import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './NotFoundPage.css';

const NotFoundPage = ({ text1, text2 }) => {
  const title1 = text1 ? text1 : '404 Not Found';
  const title2 = text2 === '' ? text2 : 'This page does not exist';
  return (
    <section className="notfoundpage-container">
      <FaExclamationTriangle className="notfoundpage-icon" />
      <h1 className="notfoundpage-title">{title1}</h1>
      <p className="notfoundpage-subtitle">{title2}</p>
      <Link to="/" className="notfoundpage-button">
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
