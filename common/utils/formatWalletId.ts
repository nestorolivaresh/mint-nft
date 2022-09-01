export function formatWalletId(walletId: string) {
  const length = walletId.length;
  return `${walletId.slice(0, 5)}...${walletId.slice(length - 4, length)}`;
};
