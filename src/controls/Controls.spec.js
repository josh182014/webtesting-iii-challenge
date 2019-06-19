import React from 'react'
import { getByText, render } from '@testing-library/react'
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
        
    })
})
