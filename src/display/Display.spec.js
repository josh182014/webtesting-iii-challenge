import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';

import Display from './Display'

describe('<Display />', () => {
    it('displays locked if locked', () => {
        const { getByText } = render(<Display />);
        expect(getByText(/Locked/i))
    })

    it('displays Unlocked if unlocked', () => {
        const locked = { locked: false }
        const closed = { closed: false }

        const { getByText } = render(<Display closed={closed.closed} locked={locked.locked} />)
        expect(getByText(/Unlocked/i))
    })

    it('displays open if open', () => {
        const { getByText } = render(<Display />);
        expect(getByText(/open/i))
    })

    it('displays closed if closed', () => {
        const locked = { locked: false }
        const closed = { closed: true }

        const { getByText } = render(<Display closed={closed.closed} locked={locked.locked} />)
        expect(getByText(/closed/i))
    })
})