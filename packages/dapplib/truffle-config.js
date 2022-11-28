require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan reward stick coin harvest basket flip genuine'; 
let testAccounts = [
"0x19812a0e2877a053d385b3e596ab3b8d0ece166e8b1d0bf352635821bb19dbe1",
"0x866ba06e36cdf965e1ea57686a4fbf8a140673ff471911d6850a2192e73d421a",
"0x41e29f81cbb9285632529da6f3e80ab4e113f19b04c3b80faac97163481032d5",
"0xca4704e2813e75a1d329821b943a4dc5970938870e52401974b64505273703e4",
"0x58d458b980cfdcde08969f5a2d4a3928719e41404bd7b8213f1a65102b43ba33",
"0x27476a311aa2fbc7c9ebd0ac8f7f33b7c120b3c0c814273fcff8164fdbf7d2be",
"0xa55931d0fb6b049d13001cdbe9ff753b4da3c002cef89decfe12eadda3d258d3",
"0x394e2efb1a653f7c1977b13bd62b2ac9d05e1d34dcbc81507b91c07ab565ae29",
"0x6a342128b6cb99d1abe3d5f8d86f7da17268204d272dd7776f91947fc2be018e",
"0x941830af3926eb1072c2a0b5561e8a657788aa926af89d97d638005f89b9ef6d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


