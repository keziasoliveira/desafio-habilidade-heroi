class hero{
    constructor(tipo, ataque, name, age){
        this.tipo = tipo
        this.ataque = ataque
        this.name = name
        this.age
        
        }
    escrever(){
        console.log(`A heroina ${this.name} do tipo ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let monge = new hero("monge", "artes marciais", "Kezia")
let mago = new hero("mago", "magia", "Kezia")
let ninja= new hero("ninja", "shuriken", "Kezia")
let guerreiro = new hero("guerreiro", "espada", "Kezia")


monge.escrever()
mago.escrever()
ninja.escrever()
guerreiro.escrever()
