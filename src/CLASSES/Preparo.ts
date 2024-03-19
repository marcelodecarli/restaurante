import { Bebidas } from "../ENUM/Bebidas";
import { PratoPrincipal } from "../ENUM/Pratos";
import { Sobremesas } from "../ENUM/Sobremesas";
import { Pedido } from "./Pedido";

export class Preparo {

    idPedido: number
    bebida: Bebidas
    comida: PratoPrincipal
    sobremesa: Sobremesas
    
    constructor(idPedido: number, bebida: Bebidas, comida: PratoPrincipal, sobremesa: Sobremesas){
        this.idPedido = idPedido
        this.bebida = bebida
        this.comida = comida
        this.sobremesa = sobremesa
    }
}