import React from 'react'
import { getByText, render, fireEvent } from '@testing-library/react'
import "jest-dom/extend-expect"; 
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

    it("button's text changes to reflect the state the door will be in if clicked", () => {

        let locked = { locked: false }
        const closed = { closed: false }
        const toggleLocked = () => {
            locked.locked = true
            console.log(locked)
        }
        
        const { getByText, getByTestId } = render(<Controls locked={locked.locked} toggleLocked={toggleLocked}/>)
        const button = getByTestId('lockButton')
        expect(button).toHaveTextContent('Lock Gate')
        fireEvent.click(button)
        expect(button).toHaveTextContent('Unlock Gate')

    })
})
