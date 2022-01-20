require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food rescue crawl range property hundred light army gaze'; 
let testAccounts = [
"0x0767d2360b329b28118d3dfdd87fb8d4f9140fcb01e4db58c58ae9ba1f7f598f",
"0xb200c1862780d6743b0b28e8e7663443d642575817579a55f80e19bb78231756",
"0xc3dc334e79ef9a6f8d1467063550d4120f48a34bfcf3e30841bb14de14b41d7c",
"0xfd5a2f25c917511e3d3a2b021d4e4e0df85e2629c8c71496b9e4cd5e3d43a18d",
"0x09c0092d004c25d7f9321ae86cf9527a8eccdb763d9cff806d07f57be17cfb57",
"0x5144a54a2ad99f2e26efb8b0e76e57ed1d33025fd1ebf76b50051d4f46125b8c",
"0x693ef7072417b4db7a9456cb2b5e9b7a18b6c6f4bf76c403bf514f0eaf2fff09",
"0x26a5678cd6c2e9e8c132cc7c2fab9b7138fdf6f1a009b3933717bc2e349d88b4",
"0xc9bfd8e04d0a7f26b93a0e6b36d31dbd308cee6611375d62928fa6befd5908cd",
"0xd29dd3005badb3d9189dca924b947f83fd3de63cfe23f8f109a934ec87b2b91a"
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


