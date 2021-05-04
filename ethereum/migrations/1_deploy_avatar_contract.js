const Avatar = artifacts.require("Avatar")

module.exports = async (deployer, network, [defaultAccount]) => {
  let proxyRegistryAddress = ""
  if (network === "rinkeby") {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317"
  } else {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1"
  }

  await deployer.deploy(Avatar, "Shape", "SHA", defaultAccount, proxyRegistryAddress, {
    gas: 5000000,
  })

  const instance = await Avatar.deployed()

  await instance.premint.sendTransaction(
    "0x0303020204150201",
    "0x99E51c820483a2e8f9DaDb013C18b4FBa857b9df"
  )
  await instance.premint.sendTransaction(
    "0x0901030911010101",
    "0x99E51c820483a2e8f9DaDb013C18b4FBa857b9df"
  )
}
