import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar os comentarios "Muito lindo" e "Espetacular" na area de comentarios', () => { 
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'Muito lindo',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'Espetacular',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Muito lindo')).toBeInTheDocument()
        expect(screen.getByText('Espetacular')).toBeInTheDocument()
    })

});