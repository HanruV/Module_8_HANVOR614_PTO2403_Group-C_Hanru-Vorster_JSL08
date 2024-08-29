let bankBranchInstance = null;

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
      Object.freeze(bankBranchInstance);
    }
    return bankBranchInstance;
  }
  getBranchInfo() {
    console.log(`Branch Info: ${this.branchInfo}`);
  }
}

const branchA = new BankBranch(`552 Garsfontein, Pretoria`);
const branchB = new BankBranch(`777 Glenwood, Cape Town`);

branchA.getBranchInfo();
branchB.getBranchInfo();

console.log(branchA === branchB);
