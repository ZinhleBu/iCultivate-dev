import React from 'react';
import { render, screen } from '@testing-library/react';

import Content from '../../components/Content';

describe('Content', () => {
    it('should render without crashing', async() => {
        render( < Content / > );

        expect(screen.getByTestId('title')).toBeInTheDocument();
        expect(screen.getByTestId('content-items')).toBeInTheDocument();
    });
});