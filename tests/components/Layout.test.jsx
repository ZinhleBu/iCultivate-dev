import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Layout from '../../components/Layout';

describe('Layout', () => {
            it('should render without crashing', async() => {
                    render( < Layout > Text < /Layout >);

                        await waitFor(() => expect(screen.getByTestId('layout')).toBeInTheDocument()); expect(screen.getByTestId('navbar')).toBeInTheDocument(); expect(screen.getByText('Text')).toBeInTheDocument();
                    });
            });