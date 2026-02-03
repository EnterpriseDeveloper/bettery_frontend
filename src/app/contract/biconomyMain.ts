import { Biconomy } from "@biconomy/mexa";
import Web3 from "web3";

const biconomyMainInit = async () => {
  // TODO add provider for prodaction
  const web3Provider = new Web3.providers.HttpProvider(
    "https://rpc.ankr.com/polygon_mumbai",
  ) as any;
  let biconomy = new Biconomy(web3Provider, {
    apiKey: "fFSHzs4c0.4922e9d7-3091-49c7-b74b-520f368a5d82",
    //    strictMode: true,
    debug: true,
  } as any);
  await BiconomyReady(biconomy);
  return biconomy;
};

async function BiconomyReady(biconomy) {
  return new Promise<void>((resolve, reject) => {
    return biconomy
      .onEvent(biconomy.READY, async () => {
        resolve();
      })
      .onEvent(biconomy.ERROR, (error, message) => {
        reject(error);
      });
  });
}

export default biconomyMainInit;
