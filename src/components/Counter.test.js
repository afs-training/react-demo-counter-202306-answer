import { render, fireEvent } from "@testing-library/react";
import {Counter} from "./Counter";

describe('Counter Test', () => {

  it('should render the counter', () => {
    const { container } = render(<Counter></Counter>)
    expect(container.querySelector('.counter')).toBeInTheDocument()
  })

  it('should render the counter with 0', () => {
    const { container } = render(<Counter></Counter>)
    expect(container.querySelector('.count').textContent).toBe('0')
  })

  it('should increase the count when click on +', async () => {
    const { container, findByText } = render(<Counter></Counter>)
    expect(container.querySelector('.count').textContent).toBe('0')
    fireEvent.click(await findByText('+'))
    expect(container.querySelector('.count').textContent).toBe('1')
  })

  it('should increase the count when click on +', async () => {
    const { container, findByText } = render(<Counter></Counter>)
    expect(container.querySelector('.count').textContent).toBe('0')
    fireEvent.click(await findByText('-'))
    expect(container.querySelector('.count').textContent).toBe('-1')
  })

})
