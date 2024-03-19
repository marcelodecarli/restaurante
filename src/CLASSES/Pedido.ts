import { Bebidas } from "../ENUM/Bebidas";
import { PratoPrincipal } from "../ENUM/Pratos";
import { Sobremesas } from "../ENUM/Sobremesas";

export class Pedido {

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

    realizarPedido(){
        
    }


}