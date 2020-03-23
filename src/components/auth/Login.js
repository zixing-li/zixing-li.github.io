import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/actionCreators';
import Alert from '../Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setLoading } from '../../actions/actionCreators';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Fragment>
      {/* <div className="text-center">
        <a href="#myModal" className="trigger-btn" data-toggle="modal">
          Click to Open Login Modal
        </a>
      </div> */}
      <div id="loginModal" className="modal fade" style={{ zIndex: 2000 }}>
        <div className="modal-dialog modal-dialog-centered modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Login</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    minLength="6"
                    className="form-control"
                  />
                </div>
                {loading ? (
                  <div>
                    <CircularProgress
                      style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                      color="secondary"
                    />
                  </div>
                ) : (
                  <div className="btn-group btn-block">
                    <input
                      style={{ margin: 3 }}
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                    <input
                      style={{ margin: 3 }}
                      type="submit"
                      className="btn btn-dark"
                      value="Close"
                      data-dismiss="modal"
                    />
                  </div>
                )}
              </form>
            </div>
            <Alert />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
