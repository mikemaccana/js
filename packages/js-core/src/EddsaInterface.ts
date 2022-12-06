import type { Keypair } from './KeyPair';
import type { Pda, PublicKey } from './PublicKey';

export interface EddsaInterface {
  generateKeypair: () => Keypair;
  createKeypairFromSecretKey: (secretKey: Uint8Array) => Keypair;
  createKeypairFromSeed: (seed: Uint8Array) => Keypair;
  createPublicKey: (input: PublicKeyInput) => PublicKey;
  findPda: (programId: PublicKey, seeds: Uint8Array[]) => Pda;
  sign: (message: Uint8Array, keypair: Keypair) => Uint8Array;
  verify: (
    message: Uint8Array,
    signature: Uint8Array,
    publicKey: PublicKey
  ) => boolean;
}

export type PublicKeyInput = number | string | Uint8Array | number[] | object;
