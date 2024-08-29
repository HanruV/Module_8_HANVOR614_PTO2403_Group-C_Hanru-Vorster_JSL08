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

const BranchA = new BankBranch(`552 Garsfontein, Pretoria`);
const BranchB = new BankBranch(`777 Glenwood, Cape Town`);

BranchA.getBranchInfo();
BranchB.getBranchInfo();
