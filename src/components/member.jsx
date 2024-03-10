import { useState } from 'react';
import emailjs from 'emailjs-com';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  name: '',
  email: '',
  confirmEmail: '',
  ghana_card: '',
  gender: '',
  password: '',
  confirmPassword: '',
  guardianName: '',
  profession: '',
  studentIdFile: null,
  nationalIdFile: null,
  school: '',
};

export const Member = (props) => {
  const [
    {
      name,
      email,
      confirmEmail,
      ghana_card,
      gender,
      password,
      confirmPassword,
      guardianName,
      profession,
      studentIdFile,
      nationalIdFile,
      school,
    },
    setState,
  ] = useState(initialState);

  const [uniqueId, setUniqueId] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file inputs separately
    if (type === 'file') {
      setState((prevState) => ({ ...prevState, [name]: e.target.files[0] }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const clearState = () => {
    setState({ ...initialState });
    setUniqueId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID using uuid
    const newUniqueId = uuidv4();
    setUniqueId(newUniqueId);

    console.log(
      name,
      email,
      ghana_card,
      gender,
      password,
      confirmPassword,
      guardianName,
      profession,
      studentIdFile,
      nationalIdFile,
      school,
    );

    // Create a FormData object to append file data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('confirmEmail', confirmEmail);
    formData.append('ghana_card', ghana_card);
    formData.append('gender', gender);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('guardianName', guardianName);
    formData.append('profession', profession);
    formData.append('studentIdFile', studentIdFile);
    formData.append('nationalIdFile', nationalIdFile);
    formData.append('school', school);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
        // Don't clear the form immediately, wait for the user to see the unique ID
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div>
      <div id="member">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>BECOME A MEMBER TODAY</h2>
                <p>
                  Are you a student in a high school, college or university, a recent graduate or a faculty staff member
                  looking to stretch your budget further? Look no further! KAMPUSDISCOUNT is here to help you unlock
                  savings and rewards. KAMPUSDISCOUNT is the number one student discount platform that gives you access
                  to exciting offers on technology, food and essentials, entertainment, beauty and fashion, travel and
                  home delivery both online and in-store. With an annual subscription of GHS10, KAMPUSDISCOUNT brings
                  you all the vouchers, discounts and coupons. Register today and get discounts on all your favourite
                  brands.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        className="form-control"
                        placeholder="Confirm Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="ghana_card"
                        name="ghana_card"
                        className="form-control"
                        placeholder="Ghana Card"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        className="form-control"
                        placeholder="Sex"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        className="form-control"
                        placeholder="Guardian Name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        className="form-control"
                        placeholder="Profession"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="studentIdFile" className="form-control">
                        Upload a Copy of Your Students or Faculty ID
                      </label>
                      <input
                        type="file"
                        id="studentIdFile"
                        name="studentIdFile"
                        className="form-control hidden"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="nationalIdFile" className="form-control">
                        Upload a Copy of Your Ghana Card
                      </label>
                      <input
                        type="file"
                        id="nationalIdFile"
                        name="nationalIdFile"
                        className="form-control hidden"
                        accept=".jpg, .jpeg, .png, .pdf"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="school"
                        name="school"
                        className="form-control"
                        placeholder="School"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    By joining, you have read, understood, and agree to our Terms of Service and Privacy Policy and
                    confirm that you are either a student, faculty staff member, fresh graduate or currently doing your
                    national service
                  </div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send
                  </button>
                </div>
              </form>
              {uniqueId && (
                <div className="alert alert-success" role="alert">
                  Your unique ID: {uniqueId}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">{/* ... (previous contact information) */}</div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">{/* ... (previous social media links) */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
