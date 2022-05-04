const Artifact = artifacts.require('../contracts/ERC20');

contract('ERC20-01-constructor.test.js 🚀', (accounts) => {

    const tokenName = 'Blockpay';
    const tokenSymbol = 'BLP';
    const tokenDecimals = 18;
    const tokenTotalSupply = 10000000000;

    let contractInstance;
    const ownerAddress = accounts[0];

    before(() => {
        web3.eth.defaultAccount = ownerAddress;
    });

    it('set name', async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
        const result = await contractInstance.name();
        
        assert.equal(tokenName, result, 'name is wrong');
    });

    it('set symbol', async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
        const result = await contractInstance.symbol();
        
        assert.equal(tokenSymbol, result, 'symbol is wrong');
    });

    it('set decimals', async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
        const result = await contractInstance.decimals();
        
        assert.equal(tokenDecimals, result, 'decimals is wrong');
    });

    it('set totalSupply', async () => {
        contractInstance = await Artifact.new(tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply);
        const result = await contractInstance.totalSupply();
        
        assert.equal(tokenTotalSupply, result, 'totalSupply is wrong');
    });

});