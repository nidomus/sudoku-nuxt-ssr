export default defineEventHandler(async (event) => {

    const generator = new Generator();
    generator.generate_playable_board(43);
    const novoTabuleiro = generator.get_json();

    return {
        status: 'sucesso',
        data: novoTabuleiro
    };
});