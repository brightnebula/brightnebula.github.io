main();

async function main() {
  await runTest(0);
  await runTest(1);
  await runTest(2);
  await runTest(16);
  await runTest(32);
  await runTest(256);
  
}

async function runTest(numToTest) {
  let bigint = BigInt(numToTest);
  let base64 = await bigIntToBase64(bigint);
  let result = await base64ToBigInt(base64);
  console.log(numToTest + ' ' + result);
}

async function bigIntToBase64(bigint) {
  let hex = bigint.toString(16); // Convert to hex string
  if (hex.length % 2 == 1)
    hex = "0" + hex;
  const buffer = Buffer.from(hex, 'hex'); // Create a Buffer from hex
  return buffer.toString('base64'); // Encode the buffer to base64
}

async function base64ToBigInt(base64) {
  const buffer = Buffer.from(base64, 'base64');
  let hex = buffer.toString('hex');
  return BigInt('0x' + hex);
}