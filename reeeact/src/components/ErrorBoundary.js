import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform other actions here
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or a fallback UI here
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
