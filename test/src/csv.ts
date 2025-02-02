import {Column, Table, Types} from '@subsquid/file-store-csv'

export const Transfers = new Table('transfers.csv', {
    blockNumber: Column(Types.Integer()),
    timestamp: Column(Types.DateTime()),
    from: Column(Types.String()),
    to: Column(Types.String()),
    amount: Column(Types.Integer()),
})
