import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FirstForm from './firstForm';
import SecondForm from './secondForm';
import ThirdForm from './thirdForm';

function Form() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    countryCode: '',
  });
  const [tAndC, setTAndC] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://codebuddy.review/submit', JSON.stringify(formData));
      console.log('res', res?.data?.data);
      navigate('/posts');
    } catch (err) {
      console.error(err);
    }
  };

  const FormTitles = ['First Form', 'Second Form', 'Third Form'];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstForm formData={formData} setFormData={setFormData} />;
    }

    if (page === 1) {
      return <SecondForm formData={formData} setFormData={setFormData} />;
    }

    return (
      <ThirdForm formData={formData} setFormData={setFormData} tAndC={tAndC} setTAndC={setTAndC} />
    );
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => {
              setPage(currPage => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            type="button"
            disabled={page === FormTitles.length - 1 && !tAndC}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit();
              } else {
                setPage(currPage => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
