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
