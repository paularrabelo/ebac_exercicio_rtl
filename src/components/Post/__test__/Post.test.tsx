import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Teste de renderização do Post', () => {
    test('Deve renderizar os componentes do Post', () => {
        render(<Post children={undefined} imageUrl={""} />)
        expect(screen.getByTestId("imagem")).toBeInTheDocument()
    })
})