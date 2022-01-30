export namespace Promocao {
    export interface Promocao {
        id?: number;
        gtin: string;
        descricao: string;
        categoria: Categoria;
        precoRegular: number;
        precoPromocional: number;
        dataInicial: Date;
        dataFinal: Date;
    }
    
    export interface Categoria {
        id: number;
        descricao: string;
    }
}