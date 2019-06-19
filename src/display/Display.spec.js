import React from 'react'
import { render } from '@testing-library/react'
import "jest-dom/extend-expect"; 
import '@testing-library/react/cleanup-after-each';

import Display from './Display'

describe('<Display />', () => {
    it('displays unlocked if unlocked (default)', () => {
        const { getByText, getByTestId } = render(<Display />);
        expect(getByText(/unlocked/i))
        const close = getByTestId("lockedUnlocked");
        expect(close).toHaveClass("green-led");
    })

    it('displays locked if locked', () => {
        const locked = { locked: true }
        const closed = { closed: false }

        const { getByText, getByTestId } = render(<Display closed={closed.closed} locked={locked.locked} />)
        expect(getByText(/locked/i))
        const close = getByTestId("lockedUnlocked");
        expect(close).toHaveClass("red-led");
    })

    it('displays open if open and class name of green-led (default)', () => {
        const { getByText, getByTestId } = render(<Display />);
        expect(getByText(/open/i))
        const close = getByTestId("openClose");
        expect(close).toHaveClass("green-led");
    })

    it('displays closed if closed and have class name red-led', () => {
        const locked = { locked: false }
        const closed = { closed: true }

        const { getByText, getByTestId } = render(<Display closed={closed.closed} locked={locked.locked} />)
        const close = getByTestId("openClose");
        expect(close).toHaveClass("red-led");
    })
})