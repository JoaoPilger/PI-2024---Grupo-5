import { randomUUID } from "crypto"

export class DataBaseMemory {
    #respostas = new Map()

    list() {
        return this.#respostas.values()
    }

    create(resposta) {
        const respostaId = randomUUID()

        this.#respostas.set(respostaId, resposta)
    }

    update(id, resposta) {
        this.#respostas.set(id, resposta)
    }

    delete(id) {
        this.#respostas.delete(id)
    }
}