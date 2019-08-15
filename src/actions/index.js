export const BANK_BRANCH = "BANK_BRANCH";
export const FAV_BANK = "FAV_BANK";

export function bankBranch(branches) {
  return {
    type: BANK_BRANCH,
    branches
  };
}

export function favBank(bank) {
  return {
    type: FAV_BANK,
    bank
  };
}
