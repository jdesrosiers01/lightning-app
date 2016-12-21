import grpc from 'grpc'

const lnrpc = grpc.load('../lightning-desktop/lnd.proto').lnrpc
const lndConn = new lnrpc.Lightning('localhost:10009', grpc.credentials.createInsecure())
export default lndConn