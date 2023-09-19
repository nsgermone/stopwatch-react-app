import { render, screen } from '@testing-library/react';
import App from '../App';

test('should have a h1 tag Stopwatch', () => {
  render(<App />);
  const pElement = screen.getByText(/Stopwatch/i);
  expect(pElement).toBeInTheDocument();
});

test('should have 3 buttons', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(3);
});

test('should have a start button', () => {
  render(<App />);
  const startButton = screen.getByText(/Start/i);
  expect(startButton).toBeInTheDocument();
});

test('should have a pause stopwatch', () => {
  render(<App />);
  const pauseButton = screen.getByText(/Pause/i);
  expect(pauseButton).toBeInTheDocument();
});

test('should have a reset stopwatch', () => {
  render(<App />);
  const resetButton = screen.getByText(/Reset/i);
  expect(resetButton).toBeInTheDocument();
});

test('should have a timer', () => {
  render(<App />);
  const timer = screen.getByText(/00:00:00/i);
  expect(timer).toBeInTheDocument();
});
