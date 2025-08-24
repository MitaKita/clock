import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClockConfigForm from './ClockConfigForm';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

describe('ClockConfigForm', () => {
  function renderWithProvider() {
    return render(
      <Provider store={store}>
        <ClockConfigForm />
      </Provider>
    );
  }

  it('renders all color pickers', () => {
    renderWithProvider();
    expect(screen.getByLabelText(/Hour Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Minute Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Second Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Background Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Clock Frame Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hour Marks Color/i)).toBeInTheDocument();
  });

  it('color pickers have correct initial values', () => {
    renderWithProvider();
    expect(screen.getByLabelText(/Hour Color/i)).toHaveValue('#333333');
    expect(screen.getByLabelText(/Minute Color/i)).toHaveValue('#666666');
    expect(screen.getByLabelText(/Second Color/i)).toHaveValue('#e33333');
    expect(screen.getByLabelText(/Background Color/i)).toHaveValue('#ffffff');
    expect(screen.getByLabelText(/Clock Frame Color/i)).toHaveValue('#333333');
    expect(screen.getByLabelText(/Hour Marks Color/i)).toHaveValue('#333333');
  });

  it('dispatches setHourColor when hour color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Hour Color/i);
    fireEvent.change(input, { target: { value: '#123456' } });
    expect(input).toHaveValue('#123456');
  });

  // Add similar tests for minuteColor, secondColor, etc.
  it('dispatches setMinuteColor when minute color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Minute Color/i);
    fireEvent.change(input, { target: { value: '#abcdef' } });
    expect(input).toHaveValue('#abcdef');
  });

  it('dispatches setSecondColor when second color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Second Color/i);
    fireEvent.change(input, { target: { value: '#ff0000' } });
    expect(input).toHaveValue('#ff0000');
  });

  it('dispatches setBackgroundColor when background color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Background Color/i);
    fireEvent.change(input, { target: { value: '#00ff00' } });
    expect(input).toHaveValue('#00ff00');
  });

  it('dispatches setClockFrame when clock frame color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Clock Frame Color/i);
    fireEvent.change(input, { target: { value: '#0000ff' } });
    expect(input).toHaveValue('#0000ff');
  });

  it('dispatches setHourMarks when hour marks color is changed', () => {
    renderWithProvider();
    const input = screen.getByLabelText(/Hour Marks Color/i);
    fireEvent.change(input, { target: { value: '#123abc' } });
    expect(input).toHaveValue('#123abc');
  });
});