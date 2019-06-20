import React from 'react'
import "jest-dom/extend-expect"; 
import { getByText, render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls'

describe('<Controls />', () => {
    it('provides close button', () => {
        const { getByText } = render(<Controls />)
        getByText(/Close Gate/i);

    })
    it('provides unlock button', () => {
        const { getByText } = render(<Controls />)
        getByText(/Lock Gate/i);
    })
    it('disables closed button if gate is locked', () => {
        const locked = { locked: true }
        const closed = { closed: false }

        const { getByText, getByTestId } = render(<Controls closed={closed.closed} locked={locked.locked} />)
        expect(getByText(/Close Gate/i, 'button')).toBeDisabled()
    })

    it('disables locked button if gate is oepn', () => {
        const locked = { locked: true }
        const closed = { closed: false }

        const { getByText, getByTestId } = render(<Controls closed={closed.closed} locked={locked.locked} />)
        expect(getByText(/Lock Gate/i, 'button')).toBeDisabled()
    })

    it("lock button's text reflects state and button can be clicked", () => {

        let checkIfLocked = { locked: false }
        const checkIfClosed = { closed: true }
        const spy = jest.fn()
        
        const { getByText, getByTestId } = render(<Controls locked={checkIfLocked.locked} toggleLocked={spy} closed={checkIfClosed.closed} />)
        let button = getByTestId('lockButton')
        expect(button).toHaveTextContent('Lock Gate')
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled()

    })
    it("lock button's text reflects state and button can be clicked", () => {

        let checkIfLocked = { locked: true }
        const checkIfClosed = { closed: true }
        
        const { getByText, getByTestId } = render(<Controls locked={checkIfLocked.locked} closed={checkIfClosed.closed} />)
        let button = getByTestId('lockButton')
        expect(button).toHaveTextContent('Unlock Gate')

    })
    it("close button's text reflects state and button can be clicked", () => {

        let checkIfLocked = { locked: true }
        const checkIfClosed = { closed: true }
        
        const { getByText, getByTestId } = render(<Controls locked={checkIfLocked.locked} closed={checkIfClosed.closed} />)
        let button = getByTestId('openButton')
        expect(button).toHaveTextContent('Open Gate')

    })
    it("close button's text reflects state and button can be clicked", () => {

        let checkIfLocked = { locked: true }
        const checkIfClosed = { closed: false }
        
        const { getByText, getByTestId } = render(<Controls locked={checkIfLocked.locked} closed={checkIfClosed.closed} />)
        let button = getByTestId('openButton')
        expect(button).toHaveTextContent('Close Gate')

    })
})
