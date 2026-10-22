import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders support us link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SUPPORT US/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});

// eslint-disable-next-line no-undef
test('renders home page heading', () => {
  render(<App />);
  const homePageText = screen.getByText(/WE'RE QUEER GLOBAL/i);
  // eslint-disable-next-line no-undef
  expect(homePageText).toBeInTheDocument();
});
