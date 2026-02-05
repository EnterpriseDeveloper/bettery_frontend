import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgCreateSwipeBet } from "./funds/tx";
import {
  MsgCreateValidPubEvents,
  MsgCreateCreatePubEvents,
  MsgCreatePartPubEvents,
} from "./pubEvents/tx";
import {
  MsgCreateValidPrivEvents,
  MsgCreatePartPrivEvents,
  MsgCreateCreatePrivEvents,
} from "./privEvents/tx";
import authHelp from "../helpers/auth-help";
import { environment } from "../../environments/environment";

const types = [
  ["/bettery.funds.v1.MsgCreateSwipeBet", MsgCreateSwipeBet],
  ["/bettery.publicevents.v1.MsgCreateValidPubEvents", MsgCreateValidPubEvents],
  [
    "/bettery.publicevents.v1.MsgCreateCreatePubEvents",
    MsgCreateCreatePubEvents,
  ],
  ["/bettery.publicevents.v1.MsgCreatePartPubEvents", MsgCreatePartPubEvents],
  [
    "/bettery.privateevents.v1.MsgCreateValidPrivEvents",
    MsgCreateValidPrivEvents,
  ],
  [
    "/bettery.privateevents.v1.MsgCreatePartPrivEvents",
    MsgCreatePartPrivEvents,
  ],
  ["/bettery.privateevents.v1.MsgCreatePrivEvents", MsgCreateCreatePrivEvents],
];

const registry = new Registry(<any>types);

const connectToSign = async () => {
  let memonic = authHelp.walletUser.mnemonic;
  if (memonic) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(memonic);

    let addr = environment.demon;
    const [{ address }] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, {
      registry,
    });
    return { memonic, address, client };
  } else {
    console.log("error getting memonic");
  }
};

export { connectToSign };
