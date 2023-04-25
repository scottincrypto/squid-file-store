import {Column, Table, Types} from '@subsquid/file-store-parquet'

export const Transfers = new Table('transfers.parquet', {
    blockNumber: Column(Types.Uint32(), {nullable: false}),
    timestamp: Column(Types.Timestamp()),
    extrinsicHash: Column(Types.Binary(), {nullable: true}),
    from: Column(Types.String()),
    to: Column(Types.String()),
    amount: Column(Types.Uint64()),
})

export const Extrinsics = new Table('extrinsics.parquet', {
    blockNumber: Column(Types.Uint32()),
    timestamp: Column(Types.Timestamp()),
    hash: Column(Types.Binary()),
    signer: Column(Types.String()),
})
