const Artifact = artifacts.require('../contracts/ERC20');
const Assert = require('truffle-assertions');

contract('01-ownable.test 🚀', (accounts) => {

    const tokenName = 'Blockpay';
    const tokenSymbol = 'BLP';
    const tokenDecimals = 18;
    const tokenTotalSupply = 10000000000;

    let contractInstance;
    const ownerAddress = accounts[0];
    const address1 = accounts[1];

    before(() => {
        web3.eth.defaultAccount = ownerAddress;
    });

    beforeEach(async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
    });

    it('registry funder must be owner before deploy', async () => {
        const result = await contractInstance.owner();
        assert.equal(ownerAddress, result, 'registry funder is not owner');
    });

});