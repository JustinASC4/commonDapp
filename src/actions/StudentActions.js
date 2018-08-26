import { encrypt } from "../utils";
import store from "../store";
import crypto from "crypto";
const Web3 = require("web3");
const Linnia = require("@linniaprotocol/linnia-js");
const IPFS = require("ipfs-mini");

// upload input data (JSON) to IPFS and make an entry on the blockchain
// use linnia js to keep track of users and their records
const encryptUploadData = async (student_data, public_key, metadata) => {
  //const linnia = store.getState().auth.linnia;
  //const ipfs = linnia.ipfs;
  const ipfs = new IPFS({
    host: "ipfs.infura.io",
    port: "5001",
    protocol: "https"
  });
  // not sure if we have metamask, assumes metamask is open
  const web3 = new Web3(window.web3.currentProvider);
  const linnia = new Linnia(web3, ipfs, {
    hubAddress: "0x177bf15e7e703f4980b7ef75a58dc4198f0f1172"
  });

  // encrypt public_key and content
  const encrypted = await encrypt(public_key, student_data);
  console.log("Encryption done");
  console.log(public_key);
  //console.log(encrypted);

  let dataUri;
  //Upload to IPFS
  ipfs.add(encrypted, (err, ipfsRed) => {
    err ? console.log(err) : (dataUri = ipfsRed);
  });

  // add the IPFS has to records
  const { records } = await linnia.getContractInstances();
  // hash of the plain file plus nonce
  // student_data["nonce"] = crypto.randomBytes(256).toString("hex");

  const hash = linnia.web3.utils.sha3(JSON.stringify(student_data));
  const [owner] = await store.getState().auth.web3.eth.getAccounts();

  //Upload file to Linnia
  const uploadRecords = await records.addRecord(hash, metadata, dataUri, {
    from: owner,
    gas: 500000,
    gasPrice: 20000000000
  });

  // return the IPFS hash

  // cat - fetch  info from IPFS
};

export default encryptUploadData;

// WEBPACK FOOTER //
// src/actions/StudentActions.js
