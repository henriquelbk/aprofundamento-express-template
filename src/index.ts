import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, coringas } from './database'
import { ACCOUNT_TYPE, STRONG_FOOT, TCoringas } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result = accounts.find((account) => account.id === id) 

    res.status(200).send(result)
})

app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const indexToDelete = accounts.findIndex((account) => account.id === id)

    if(indexToDelete !== -1 ) {
        accounts.splice(indexToDelete, 1)
    } else {
        console.log("Deu ruim, não encontrou o index para deletar");
    }

    res.status(200).send("Item deletado com sucesso!")
})

app.put("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const account = accounts.find((account) => account.id === id) 

    account.ownerName = newOwnerName || account.ownerName //este || é para não apagar as infos caso não sejam alteradas no json
    account.type = newType || account.type

    account.balance = isNaN(newBalance) ? account.balance : newBalance // ou seja, se newBalance NÃO for um número (undefined), continuará o valor original. Se for um número (havendo alguma alteração, incluindo o 0), será valido o newBalance.

    res.status(200).send("Atualização feita com sucesso")
})



// Exercicio de fixação - fazer um CRUD do zero (coringas)



app.get("/coringas", (req: Request, res: Response) => {
    res.status(200).send({coringas})
})

app.post("/coringas", (req: Request, res: Response) => {
    const { id, name, goals, strongFoot }: TCoringas = req.body

    const novoJogador: TCoringas = {
        id,
        name,
        goals,
        strongFoot
    }
    coringas.push(novoJogador)

    res.status(201).send('Jogador contratado com sucesso')
})

app.delete("/coringas/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const indexToDelete = coringas.findIndex((coringa) => coringa.id === id)

    if(indexToDelete !== -1 ) {
        coringas.splice(indexToDelete, 1)
    } else {
        console.log("Deu ruim, não encontrou o index para deletar");
    }

    res.status(200).send("Item deletado com sucesso!")
})

app.put("/coringas/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const newName = req.body.name as string | undefined
    const newGoals = req.body.goals as number | undefined
    const newStrongFoot = req.body.strongFoot as STRONG_FOOT | undefined

    const coringa = coringas.find((coringa) => coringa.id === id) 

    coringa.name = newName || coringa.name //este || é para não apagar as infos caso não sejam alteradas no json
    coringa.goals = newGoals || coringa.goals

    coringa.strongFoot = newStrongFoot || coringa.strongFoot 

    res.status(200).send("Atualização feita com sucesso")
})