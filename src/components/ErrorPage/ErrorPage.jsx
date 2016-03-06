import React from 'react';
require('../../stylesheet/components/ErrorPage.scss');

const propTypes = {
  errorTitle: React.PropTypes.string,
  errorDescription: React.PropTypes.string,
  handleBackButton: React.PropTypes.func,
};

const defaultProps = {
  errorTitle: 'Unexpected error',
  errorDescription: 'We\'re sorry for the inconvenience.',
  handleBackButton() {
    window.location.reload();
  },
};

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page-container">
        <h1 className="error-page-title">{this.props.errorTitle}</h1>
        <p className="error-page-description">{this.props.errorDescription}</p>
      </div>
    );
  }
}

ErrorPage.propTypes = propTypes;
ErrorPage.defaultProps = defaultProps;

export default ErrorPage;
