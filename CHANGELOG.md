# Changelog

## [0.2.9](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.8...galileo-generated-v0.2.9) (2026-03-06)


### Features

* **posthog:** Added SDK data to header in requests, for Posthog filtering ([#44](https://github.com/rungalileo/galileo-ts-generated/issues/44)) ([6211709](https://github.com/rungalileo/galileo-ts-generated/commit/62117090630c8745749b56b2af68536b518b061f))
* **version:** Added extra-files config to support bumping Speakeasy … ([#49](https://github.com/rungalileo/galileo-ts-generated/issues/49)) ([bfff599](https://github.com/rungalileo/galileo-ts-generated/commit/bfff5997ef1fc16b5d9d685dc5ee5a35ce3c5c12))

## [0.2.8](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.7...galileo-generated-v0.2.8) (2026-02-27)


### Features

* **certificate:** Support for certificate env vars, hook to add support for certificates if vars configured. ([#41](https://github.com/rungalileo/galileo-ts-generated/issues/41)) ([793a503](https://github.com/rungalileo/galileo-ts-generated/commit/793a503fe9e6fc9a5ebde122237832144e0a974e))

## [0.2.7](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.6...galileo-generated-v0.2.7) (2026-02-24)


### Features

* **logging:** Added logger manager, added env var to galileo-config to properly manage ingestion of logging level setup. ([#42](https://github.com/rungalileo/galileo-ts-generated/issues/42)) ([06b46f6](https://github.com/rungalileo/galileo-ts-generated/commit/06b46f6e2201dee0183853e7d1d20f44a9f57325))

## [0.2.6](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.5...galileo-generated-v0.2.6) (2026-02-10)


### Bug Fixes

* **overlay:** Added overlay to update property on Document schema, added script to run codegen, ran codegen. ([#39](https://github.com/rungalileo/galileo-ts-generated/issues/39)) ([75eca37](https://github.com/rungalileo/galileo-ts-generated/commit/75eca370e0c42d990f77ca8b5d4345b7d6c4a30d))


### Miscellaneous

* **setup:** Updated documentation, readded code generation script. ([#36](https://github.com/rungalileo/galileo-ts-generated/issues/36)) ([6de0268](https://github.com/rungalileo/galileo-ts-generated/commit/6de02688afbfd8edadf0293d90387c2c65c3180a))

## [0.2.5](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.4...galileo-generated-v0.2.5) (2026-02-05)


### Miscellaneous

* **setup:** Updating npm and forcing provenance configuration. ([#34](https://github.com/rungalileo/galileo-ts-generated/issues/34)) ([82c5c12](https://github.com/rungalileo/galileo-ts-generated/commit/82c5c1273fc09d5a334268a90e00b84e8942a26b))

## [0.2.4](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.3...galileo-generated-v0.2.4) (2026-02-05)


### Miscellaneous

* **setup:** Removing unecessary npm token ([#32](https://github.com/rungalileo/galileo-ts-generated/issues/32)) ([63d55e5](https://github.com/rungalileo/galileo-ts-generated/commit/63d55e5d8d83f701679cbfb25457b4813ea89157))

## [0.2.3](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.2...galileo-generated-v0.2.3) (2026-02-05)


### Miscellaneous

* **setup:** Configured trusted publishing so release-please can publish to npm without a token ([#30](https://github.com/rungalileo/galileo-ts-generated/issues/30)) ([d6cae97](https://github.com/rungalileo/galileo-ts-generated/commit/d6cae979ca76e976adc8f20249f3371c85f25126))

## [0.2.2](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.1...galileo-generated-v0.2.2) (2026-02-05)


### Miscellaneous

* **setup:** Corrected version in gen.yaml, added repository information. ([#28](https://github.com/rungalileo/galileo-ts-generated/issues/28)) ([91ac292](https://github.com/rungalileo/galileo-ts-generated/commit/91ac2928d86787c0d337316fddbf48719d381c1c))

## [0.2.1](https://github.com/rungalileo/galileo-ts-generated/compare/galileo-generated-v0.2.0...galileo-generated-v0.2.1) (2026-02-03)


### Features

* **config:** Added comments to public methods, and to env var constants. ([79c212e](https://github.com/rungalileo/galileo-ts-generated/commit/79c212eb80e1df3e38774e18d4b5c58990562b6c))
* **config:** Adding Jest option of tests for new features. ([f57f0bf](https://github.com/rungalileo/galileo-ts-generated/commit/f57f0bf2b74f7a2979f0217717a89ff9ee9dbd8f))
* **config:** Adding Vitest option of tests for new features. ([bb9d38c](https://github.com/rungalileo/galileo-ts-generated/commit/bb9d38c1857819c29200ac72ee8123a02390dcda))
* **config:** Created GalileoConfig to support . ([3e4b242](https://github.com/rungalileo/galileo-ts-generated/commit/3e4b242bdc7065e3f56437bb470edd29edfa058c))
* **config:** Created GalileoConfig to support . ([914d648](https://github.com/rungalileo/galileo-ts-generated/commit/914d6481b1305702cee172f28b4732f455d7a2a5))
* **config:** Updating compiling dual format configuration. ([f494496](https://github.com/rungalileo/galileo-ts-generated/commit/f49449629897c300a68539a25772228040dcbb80))
* **setup:** Disabled Speakeasy's automatic version bump, updated autogenerated code. ([2871e99](https://github.com/rungalileo/galileo-ts-generated/commit/2871e9939b8592222a61c23cd7d38fe5cfc5aa25))
* **setup:** Improvements on workflow, updated Speakeasy configuration ([467d989](https://github.com/rungalileo/galileo-ts-generated/commit/467d989837691c55654342b93032a9ac95b16e66))
* **setup:** Removed Speakeasy's publish Action, substituted for Release-Please, Speakeast Generation doesn't bump version anymore, locked index.ts for generation to support customizations. ([f33ec7b](https://github.com/rungalileo/galileo-ts-generated/commit/f33ec7b2865dc42e98bcce14ba01a0e55001914f))


### Miscellaneous

* 🐝 Update SDK - Generate SDK 0.1.0 ([86ebe1d](https://github.com/rungalileo/galileo-ts-generated/commit/86ebe1d7d3bc6d62e62c4ffea9743aecbdbcc15a))
* 🐝 Update SDK - Generate SDK 0.1.2 ([e047177](https://github.com/rungalileo/galileo-ts-generated/commit/e0471771d37914f42a34831701a4fb17659f12a0))
* 🐝 Update SDK - Generate SDK 0.1.3 ([50c87b9](https://github.com/rungalileo/galileo-ts-generated/commit/50c87b968759330e026a550fc2d012c9ca80c7ef))
* **main:** release 0.2.0 ([c4286fa](https://github.com/rungalileo/galileo-ts-generated/commit/c4286fab188931ec1353478881c998f012b251d4))
* **main:** release 0.2.0 ([058ae84](https://github.com/rungalileo/galileo-ts-generated/commit/058ae84e8f877675a1b24466eee5e4964d3e1527))
* **markdown:** Create AGENTS.md and CLAUDE.md, to support LLMs during analysis of code. ([7de1c8b](https://github.com/rungalileo/galileo-ts-generated/commit/7de1c8b298088277d0cb8c1cd602646c06f11b6c))
* **markdown:** Create AGENTS.md and CLAUDE.md, to support LLMs during analysis of code. ([7ccc98c](https://github.com/rungalileo/galileo-ts-generated/commit/7ccc98c37cd005c6029560cc1d8d420f100a3d84))
* **markdown:** Improved file structure. ([98da00c](https://github.com/rungalileo/galileo-ts-generated/commit/98da00c7ca1c95031c094c57272624f795371f9a))
* **setup:** Added CODEOWNERS to test filtering updated files after codegen, added error management and first auth workflow, added gh actions for generation and publication. ([57db5d6](https://github.com/rungalileo/galileo-ts-generated/commit/57db5d6521747e8b4802614fa630c165c51ff148))
* **setup:** Added first github actions, generated new version of code to analyze PR expected to be generated by automation. ([989b559](https://github.com/rungalileo/galileo-ts-generated/commit/989b5592fc77dda6bfec04b9716f9475462d0d3e))
* **setup:** Added first github actions, generated new version of code to analyze PR expected to be generated by automation. ([cf57359](https://github.com/rungalileo/galileo-ts-generated/commit/cf57359fc1c384827c7a894b8defbefc02b3a3c1))
* **setup:** Attempt without support for parsing title. ([#25](https://github.com/rungalileo/galileo-ts-generated/issues/25)) ([f41746b](https://github.com/rungalileo/galileo-ts-generated/commit/f41746b6d8d6e7d9f227e62398d6f02b20c05409))
* **setup:** Corrected npm token. ([af69cd5](https://github.com/rungalileo/galileo-ts-generated/commit/af69cd5ff5b0238224ad6d2b3c4f64969ac83108))
* **setup:** Corrected npm token. ([9f24488](https://github.com/rungalileo/galileo-ts-generated/commit/9f24488f6a188473a0b2ba6f67af410399a5a2c8))
* **setup:** First commit, raw generated code. ([dd978d1](https://github.com/rungalileo/galileo-ts-generated/commit/dd978d112d964f6a2004d932a2357278d82f9b46))
* **setup:** Fixed regex (last attempt). ([#23](https://github.com/rungalileo/galileo-ts-generated/issues/23)) ([c755007](https://github.com/rungalileo/galileo-ts-generated/commit/c755007f15e635ea819738f3f801c51006d731c2))
* **setup:** Fixed regex. ([#22](https://github.com/rungalileo/galileo-ts-generated/issues/22)) ([8ad7a25](https://github.com/rungalileo/galileo-ts-generated/commit/8ad7a25380a1770202a515578a07971c6059b546))
* **setup:** Improved managament of env vars, improved error management. ([cf7039e](https://github.com/rungalileo/galileo-ts-generated/commit/cf7039e82222d80203f99cc70cd4c2f6f2187c64))
* **setup:** Pre-commit configuration added. ([ab8e7cd](https://github.com/rungalileo/galileo-ts-generated/commit/ab8e7cddb08a7ed3223e3115791887c213125d44))
* **setup:** Removed devcontainers config, updated persistentEdits config to support generation on GH Actions context. ([dfbaac4](https://github.com/rungalileo/galileo-ts-generated/commit/dfbaac493b9869d49d7cd8ecc520c21029ac4907))
* **setup:** Removed temporary reference for local tests, updated wi… ([756cd72](https://github.com/rungalileo/galileo-ts-generated/commit/756cd72c410d1f0d3200acf1ab1028a903effabd))
* **setup:** Removed temporary reference for local tests, updated with appropriate one. ([1b5375f](https://github.com/rungalileo/galileo-ts-generated/commit/1b5375f56890486ac3cbe64ee95ad9b959c69899))
* **setup:** Small message update to trigger release-please. ([e8e6780](https://github.com/rungalileo/galileo-ts-generated/commit/e8e678077bc934aab6b5f08b5198a23c291a7955))
* **setup:** Small message update to trigger release-please. ([440ca43](https://github.com/rungalileo/galileo-ts-generated/commit/440ca43ee8dde355de48d3264cbe0808de3e89dc))
* **setup:** Trigger for release-please (2). ([6053b4a](https://github.com/rungalileo/galileo-ts-generated/commit/6053b4a97ce24b1165ff770effd7dc053696c12c))
* **setup:** Trigger for release-please (3). ([e86ec64](https://github.com/rungalileo/galileo-ts-generated/commit/e86ec6427a0d73540e790130a113ed4a494a55a8))
* **setup:** Trigger for release-please (3). ([f39494d](https://github.com/rungalileo/galileo-ts-generated/commit/f39494d5b86ad5700276f1653cca8a7e0ebb40f5))
* **setup:** Trigger for release-please (5). ([#20](https://github.com/rungalileo/galileo-ts-generated/issues/20)) ([c1206d1](https://github.com/rungalileo/galileo-ts-generated/commit/c1206d1b8d8946c12569eb65af9e17f6267e1545))
* **setup:** Trigger for release-please. ([90e8a87](https://github.com/rungalileo/galileo-ts-generated/commit/90e8a875c9df55ec628eff3c8db7df3ddde3f054))
* **setup:** Trigger for release-please. ([72a955c](https://github.com/rungalileo/galileo-ts-generated/commit/72a955c0f9b29422d63aafb014400fa8ee6543fa))
* **setup:** typo fix. ([77d36a5](https://github.com/rungalileo/galileo-ts-generated/commit/77d36a5754ad3bdeef4c4d7eb92c1ba17ad2cc2f))
* **setup:** typo fix. ([cb9cf0e](https://github.com/rungalileo/galileo-ts-generated/commit/cb9cf0e577097bc8037d0b45da84f2abe91adfc5))
* **setup:** update project setup ([122afe7](https://github.com/rungalileo/galileo-ts-generated/commit/122afe77cd6b9a3b332310d6fa3f0c8290b68bf3))
* **setup:** Updated publish gh action with new env var, ran codegen again. ([8ded894](https://github.com/rungalileo/galileo-ts-generated/commit/8ded894cc80e78001a5a6b60b6533cb336619227))
* **setup:** Updated publish gh action with new env var, ran codegen… ([fd9df6a](https://github.com/rungalileo/galileo-ts-generated/commit/fd9df6a72295fe9565894ac042ffee0e901fe368))
* **setup:** Updated readme, added script to trigger code generation. ([12811a8](https://github.com/rungalileo/galileo-ts-generated/commit/12811a8c295881a25ae0c3620fe21c9926a93f4b))
* **setup:** Updated readme, added script to trigger code generation. ([14d618e](https://github.com/rungalileo/galileo-ts-generated/commit/14d618e89e718956eb465882fb03dd6328abf3b1))
* **setup:** Updated release-please config, trigger for release-please (6). ([#21](https://github.com/rungalileo/galileo-ts-generated/issues/21)) ([7af7f49](https://github.com/rungalileo/galileo-ts-generated/commit/7af7f496346ab325be3a65595e252d854d743401))
* **setup:** Updated secret name ([317b308](https://github.com/rungalileo/galileo-ts-generated/commit/317b3088ead00d8df951bab4cfc2f3e3dbef0a95))
* **setup:** Updated secret name ([f9caae5](https://github.com/rungalileo/galileo-ts-generated/commit/f9caae5231fdcc472f98f8bbfeabc8e2431b90b9))

## [0.2.0](https://github.com/rungalileo/galileo-ts-generated/compare/v0.1.3...v0.2.0) (2026-02-03)


### Features

* **setup:** Disabled Speakeasy's automatic version bump, updated autogenerated code. ([2871e99](https://github.com/rungalileo/galileo-ts-generated/commit/2871e9939b8592222a61c23cd7d38fe5cfc5aa25))
* **setup:** Improvements on workflow, updated Speakeasy configuration ([467d989](https://github.com/rungalileo/galileo-ts-generated/commit/467d989837691c55654342b93032a9ac95b16e66))
* **setup:** Removed Speakeasy's publish Action, substituted for Release-Please, Speakeast Generation doesn't bump version anymore, locked index.ts for generation to support customizations. ([f33ec7b](https://github.com/rungalileo/galileo-ts-generated/commit/f33ec7b2865dc42e98bcce14ba01a0e55001914f))
