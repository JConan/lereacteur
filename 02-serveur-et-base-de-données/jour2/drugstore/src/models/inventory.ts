import { Schema, Connection, Document } from "mongoose"

export interface IDrug {
    name: string,
    quantity: number
}

const DrugSchema = new Schema({
    name: String,
    quantity: Number
})

export default (connection: Connection) => {
    return connection.model<IDrug & Document>("Drug", DrugSchema)
}