import { encrypt } from "../utils";
import store from "../store";
import crypto from "crypto";
const Web3 = require("web3");
const Linnia = require("@linniaprotocol/linnia-js");
const IPFS = require("ipfs-mini");

export const LOAD_APP = "LOAD_APP";

export const sendAppData = data => ({
  type: LOAD_APP,
  payload: data
});

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
  console.log("Encrypting data");
  const encrypted = await encrypt(public_key, student_data);

  //Upload to IPFS
  let dataUri;
  console.log("Uploading to IPFS");
  dataUri = await new Promise((resolve, reject) => {
    ipfs.add(encrypted, (err, ipfsRed) => {
      err ? reject(err) : resolve(ipfsRed);
    });
  });
  //console.log(dataUri);
  const { records } = await linnia.getContractInstances();

  const hash = linnia.web3.utils.sha3(JSON.stringify(student_data));
  const [owner] = await store.getState().auth.web3.eth.getAccounts();

  //Upload file to Linnia
  console.log("Making a record entry on the BlockChain");
  const uploadRecords = await records.addRecord(hash, metadata, dataUri, {
    from: owner,
    gas: 500000,
    gasPrice: 20000000000
  });
  return uploadRecords;
};

export default encryptUploadData;

// WEBPACK FOOTER //
// src/actions/StudentActions.js
