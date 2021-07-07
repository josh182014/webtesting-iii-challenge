import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('', () => {
        expect(true).toBe(true)
    })
})

describe('displays',() => {
    it('renders display', () => {
        const { getByTestId } = render(<Dashboard />)
        getByTestId(/display/i)
    })
    it('renders controls', () => {
        const { getByTestId } = render(<Dashboard />)
        getByTestId(/controls/i)
    })
})