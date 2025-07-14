const { expect } = require("chai");

describe("ProductAuth", () => {
  it("registers & verifies a product", async () => {
    const [owner] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("ProductAuth");
    const c = await Factory.deploy();

    const tx = await c.registerProduct("Phone", "Gen 1", "ipfs://cid");
    await tx.wait();

    expect(await c.productCounter()).to.equal(1);
    const p = await c.verifyProduct(1);
    expect(p.name).to.equal("Phone");
    expect(p.owner).to.equal(owner.address);
  });
});
