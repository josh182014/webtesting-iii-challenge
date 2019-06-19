import React from 'react'
import { getByText, render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls'

describe('<Controls />', () => {
    it('', () => {
        expect(true).toBe(true)
    })
    it('provides close button', () => {
        const { getByText } = render(<Controls />)
        getByText(/Close Gate/i);
    })
    it('provides unlock button', () => {
        const { getByText } = render(<Controls />)
        getByText(/Lock Gate/i);
    })
})
