'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "65f906d5efa3a54940db49a11daec593",
".git/config": "79cbb7a32346edcb1133dbca4fc4135a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1bdb1bd3328134fec2d15a3d6115d68f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "105bea87f55f7c3cc411652c91b5731a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1362f89ee7607b7196164192da49b94",
".git/logs/refs/heads/main": "f1362f89ee7607b7196164192da49b94",
".git/logs/refs/remotes/origin/HEAD": "576e65405de85418a88af5eaa6e9aa25",
".git/logs/refs/remotes/origin/main": "6f0b8ffe551a17070c5a7b7a44a92f3e",
".git/objects/04/42b174be14d173cc01c0c26f682c9681f71efe": "7742be7a25a68c814275b3a59637a28f",
".git/objects/05/1bf254ad782820627890ef2b0e06fbae63dc6e": "627c47ddb5753c99d82203b3b5a0f310",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/053758b433d75ddf51e9a3fcbeb8a606d581f1": "03bb25742b3d1549ccfe1549a56897da",
".git/objects/08/95afcfc93a0376eea813d81767f04849848542": "955e6404770fa111119b23143f1dae2a",
".git/objects/0a/b8aaaada0c2cf3c0de811b2bde7312d458c267": "aca4d7c54b26b103c5d616fa6a8fcd8d",
".git/objects/0a/f7fbea93426bb32a623c5abbd2fe5699a876e8": "94f81186401fde5d0aa437b8ce40ca84",
".git/objects/0b/696192222a079d8a3116cb880de75e10c14fb1": "dd84c6b7b0d03c5e7e96a924d9fb49e5",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/15/1bb975e19a217d1f22abc364b8a9258dc7186a": "985efd720e8f7bc2e48435e47739b2a4",
".git/objects/1c/10b76bad6d641a83fd969b8d236c5c5b3487be": "6b4f07cc4ffc803b785d8bbbd6c4ff68",
".git/objects/1e/57c3e3ae3b1b576d5495a3dd46a5ac772f7e37": "d89b2cf83ecf9732c7107b9acb0d698d",
".git/objects/1f/56b3ecd77dbc600a046a9c3f7f1b01e77db688": "c8a1ce37959cdcd55ef6a2554f676aaf",
".git/objects/22/a959b1e9d97dd5dc7a89883fab40475d637ee4": "c6784aa4c15ccc0ed8599913a62acff5",
".git/objects/23/30b6feda02b3d3277f85832bf808f7bade63dc": "f13e226a5bc314b815f88b823ab685cd",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/942bdf81712feeb5527414a8397f44cb425ab7": "89416c5abce3a8d34186fbd2d5b9a28b",
".git/objects/2e/e9b4e11f0f20d7299008b8eb03fe3595943643": "54302c2fd9e0b28274d77d8d15ab2822",
".git/objects/37/8fa512dfeab45e77f0b96aabf982ca1e2aa408": "53654b2c42bee45968736f6add573318",
".git/objects/3a/8d26b3f95a7f1c6686f55cba82fbeb49d10a8e": "38d305480404355069d5a8550992d7f9",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/794157a7035010ddcd7785ec36bd4b246abdd5": "fa6bc1c63d4105c5069310c617844550",
".git/objects/3d/0c14293980f331970f97c6621749782dad0614": "48249178fb168f98296fbead7ad40135",
".git/objects/48/25a8b9e7d67be9c16d33b78b4ff21ffef7a275": "877b3982a4e94aa0c7577539b9875c2d",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/b626c698c495b118cff4536755f73836348944": "046eb16caa8df231a57705edaf2a5629",
".git/objects/4e/4a1a4e0ece8395d470b5e1e701fe33bc0249ae": "d56a98fe9068ebfe63b1b5375de34119",
".git/objects/4e/ca0628c00b55c4301b28d7a14d9f0262ba3dc3": "d18f5365a2de6b135e81fa429c8cec1b",
".git/objects/4e/fe4eb0c27948ad613203ccdfb2d5bc14f44234": "3efc378f978c3737e7f93efa19de0f8b",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/54/2a645a83242e48348faec060592150bcf044e0": "7955c88d3aeed41fff9ccde8d1578fc6",
".git/objects/57/b9431aa8fe450e29991da3e4b5da817d626395": "29a9ce128613f3591ac90d0ab39bc79f",
".git/objects/5d/d6d1b37645e5be8d0a89c1716a766dfb2c5287": "7101010d5480b8556a4de39da579fbe5",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/0e0789f662597019c9f9f641e7c6b5b79a376c": "f3e960a353c4f1c301be750fe40efae0",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/67/ec57f0a3e1040c29b324140dcef7f8b03403f6": "4b9b248107b4a188983617d0e92e70ef",
".git/objects/69/d92b44c8779d39166c9ca2e3cb42f71fdf6caa": "3d70db6329b118f8fd6b73e4d82f16de",
".git/objects/6a/5f23a2f125ee67d3b14ba3f42bc887864634db": "a09b82fc23d4bf070b5b32ed8fa32cf1",
".git/objects/6c/ae2226d09d9b41d074169a19955cbffa104698": "da238886879bbef0b061a99eed9388e3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/79/75261bd47d0112fab7f5a376e1293e56a55584": "feb014f5ccf06785742c110e165622d3",
".git/objects/7c/62f5eb46ca5fe816098033dc5f2d6ba661ac68": "fecec024b600a7726cd971a57aa36a47",
".git/objects/7d/0ff8de4c189e71d75ebbf67abc1b10c3f96e2b": "a44ee483b1eb2908dd59dba156987799",
".git/objects/7f/0410cca38272e22f2d1feffbf23fde9ed65324": "4da2de2fcf8711f425dd5b9eac10602c",
".git/objects/7f/a93ebac87b2ea2d173955eb3753e2335cc4c66": "d7de89c0858c26a999357ed486c85880",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/8a/eb849461683eaa32475d354e2d4315c92520b2": "98c6d8eddbcfbc34d7223bb06066ab2d",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/78fdb263118cb6b5fbf5556efabd9daefdae27": "44b9c21056f3ba627769a53f24b355f1",
".git/objects/8d/c9e7819a0f717f8d3ded90ebe25e5059bc34c3": "54ab94dad8f9b5b274783b61081a791d",
".git/objects/93/cf3d332206dd8dbf04169b6b961aa3a2ce8baa": "aab8d3284ad4a5427967451edf57040a",
".git/objects/95/00997a62c886bf21a42a9e959a6d57602c4df9": "c6d081c412d3ef0a0c23a9fca902acf9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/a5a576b504eaa948705be6788f4a097ca0171c": "ddcacc6d8cb65769941d890d44b9992e",
".git/objects/9c/f3a386229cdc0e797f85a2fdc29d8b5db69674": "8d6858c1c3bb86c3cce11bccb71f1385",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/edc6d4578de06d08f87ce98b6f964c3c780b2c": "434eac926944922aee8f4d4d62cde1a8",
".git/objects/b5/d180f7feb645eebc9b388ce2d05d96c7c654bf": "76848ff9058d4b462394edcb5cd290a3",
".git/objects/b6/40335fac5daffc696d0b5cb958cb3aaa2ed615": "2a571bd82670e26715afae7b0cb9a6f1",
".git/objects/b6/7805084a086c72136d9e921fda7bf40eebf174": "f4df44085e562bff996ff0ea95a09c0f",
".git/objects/bb/7c03889c27ed5c3a2613ff7809f4cfb1478537": "1d7d1ef661a1b9f1d88713e173fa97cc",
".git/objects/bd/8d0b4ac1e176d52e3a738fa619b063040d7e27": "9fea1467930ec403b0be85644af024db",
".git/objects/be/aa1dec6abcc35ba890e53057fa98f5493a7ae0": "bfdb0984c77fa245f205c8fe7a8b3d5f",
".git/objects/c1/1dcecac9e89867183e194ae22b03434811e2d1": "303f953a6b5a6b21dd7a2c7927bb74ec",
".git/objects/c2/dda3a42a188b10bcea6ebd74109a56f411f931": "cd693362e03644e1634930532da2b3a0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/474126a857ae44de47c155bbbb1dea85d0628c": "352d15b28c02ec7f01fd5a5020ffc8ae",
".git/objects/ca/5ec2a408eeea83726f08cbc719f95b9cc73fae": "0e3e7e801e6639c7267a0505bc0a741f",
".git/objects/cb/33e0306fd576d55b2b648747c3805f54848abd": "2115ade34dce11e814394d27f51c0c71",
".git/objects/cf/350eaff1800b72b47d14e0121b5a6eb0b70851": "354d20a8c09a7efc581f064f794e6983",
".git/objects/d0/dbbd623bbff923b047bae375cab4f0fdbe80b5": "5045014076bcedbbccddf4980abb7ee0",
".git/objects/d1/798ccc1a31b8beeadd751483d5fdb7dbf0d5f0": "a60e5f5ff286597961702f6837815845",
".git/objects/d3/c3f3cdd6a745e26e7f9b5a08755f93cf82b00f": "3dc9bddb01812daf3f2eb713ed5dd4e3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/84b3b079ecc35d29c84d7afc43863e3f6117d9": "ae3d054521db4a66ad140e73b8444c9c",
".git/objects/da/2be935f38e23be591500459d1661f82f1abc81": "bb16808fffb9e27ced90fec5cf4cac6c",
".git/objects/dc/9772d3a9c6616ee3cbc8f1813ed3a176ee7a41": "071642b2b84a86e44213e38d92b39e7d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/e096a24e59fb9f1e501899389e3905c6c27cd7": "73359fa7932626d48c34734684c71c0f",
".git/objects/e5/a2d4147fbe6e0ae9377a7cd17f974a6ba8f009": "341462411a38f03ea42d24a7ffe830a4",
".git/objects/e6/6d694c1b0cedc150e1ddd8baebd857dbe1e28e": "0de3c5e479d600faba211be84bbaf2ff",
".git/objects/e6/726bc874929490f547fbcafd40f2892c79f030": "3f9edc1bb8349c1d43c6d0f578547011",
".git/objects/e7/df0ef6728b4977a9e5809d02c4619ee95c283e": "8b3d1ed532f6f38f8431757952afc4af",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/06953e5b49ad68f8cb45b56df53b6362cb709e": "401639f90c12fd3cd0df46b463e1d710",
".git/objects/ff/5b6ce6205590cdee52488a36a546fe1b78b095": "449fd1ae644a3cded15d329d266616a3",
".git/refs/heads/main": "37380ce9483c026042d2c52a0f686673",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "37380ce9483c026042d2c52a0f686673",
"assets/AssetManifest.bin": "6626838526b09deb1d3a9dea70ca6ee9",
"assets/AssetManifest.bin.json": "96a989dc661566fa233d5eec13884daa",
"assets/AssetManifest.json": "7501742b7b6c6f95807050d85ff44ff7",
"assets/assets/book.png": "fefb25312bac8f08e116baebc1248766",
"assets/assets/character-1.png": "bc6d0b187844051666f6540e9768e9ff",
"assets/assets/character-2.png": "4d0cee687af06093d3e498eaccc93aa3",
"assets/assets/emoji/Airplane.png": "1483f1f11b0100978d3188ca43a1f82b",
"assets/assets/emoji/Book.png": "37f0d3a87be8cf4dbbd5faa3fc024269",
"assets/assets/emoji/Brain.png": "1df42512fa24d0f4036d7da4d5854526",
"assets/assets/emoji/Gym.png": "5a150ea0e29632878858ca969c4ce743",
"assets/assets/emoji/Magnifier.png": "0121dbce702fcfbf52c2bc97d8e6babd",
"assets/assets/emoji/Moon.png": "c0b629faae5bdead6af320a76cbe5763",
"assets/assets/i.png": "601d3b98cc215a7de02f1be949c08d38",
"assets/assets/left-and-right-arrows.png": "e509f473c9a3ae9b302e37ae23b04d0d",
"assets/assets/pfp2.png": "21dd919b44595bdbd3e771ca7eb0e8d4",
"assets/assets/ss/appleMusic.jpg": "3bfb535561d59f426bcc4d0d8ca9b84e",
"assets/assets/ss/calc.jpg": "a5a99b612e58d79fa07bf9f498cc1586",
"assets/assets/ss/findx.jpg": "10596dbdfd897bb4e9b19e6c72ae7fce",
"assets/assets/ss/portWeb.jpg": "b1d0c1d916aed055dcd46117da4d3aca",
"assets/assets/ss/qrcode.jpg": "27605b7b4d2bdb35f7d700b60c44704c",
"assets/assets/ss/stopWatch.jpg": "d406b4c29098b040d43684bac289277e",
"assets/assets/ss/ticTac.jpg": "541131c236f6721adebf387335a44131",
"assets/assets/ss/toDo.jpg": "d8527ddfa7fb97df091be377aa6eb95c",
"assets/assets/ss/weather.jpg": "a576d932733fc3068ee5c8fa11e63bc0",
"assets/assets/svg/404.svg": "a1c36d16b80c7ecbb9b36868e664644a",
"assets/assets/svg/blender.svg": "453a6aeb819125a1346f73a69cb28b41",
"assets/assets/svg/cpp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/svg/css.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/svg/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svg/email.svg": "99c14f8ef3bf527047167e56e5021217",
"assets/assets/svg/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/svg/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svg/framer.svg": "5d0f449e36a5402b819312beea001086",
"assets/assets/svg/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/svg/google.svg": "8cddc97baf8329135ae55c6672fc5d63",
"assets/assets/svg/hackerrank.svg": "0b190df020a48e0e8e84f8df5f7a8335",
"assets/assets/svg/html.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/svg/instagram.svg": "abc08e76d2b0256d0a0c1815fc091be7",
"assets/assets/svg/java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/svg/javascript.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svg/linkedin.svg": "15b4281ebd93cc246c81200bc3c1fd94",
"assets/assets/svg/mysql.svg": "9a87849cee36242dc6ab7399078e0869",
"assets/assets/svg/python.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/svg/x.svg": "602958e0674315e1cd989b3ac5f74567",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6500bcc8e09dff2e0706ff5a91d6092c",
"assets/NOTICES": "60188e3fd1fdb1d500c376c74a2879ed",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e9a942e97f590b86ad272037c0aed5d9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "964464118717a33c705c5c4a93cf7496",
"icons/Icon-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"icons/Icon-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"icons/Icon-maskable-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"icons/Icon-maskable-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"index.html": "a66dda5ce273012090c15e944afbb337",
"/": "a66dda5ce273012090c15e944afbb337",
"main.dart.js": "abde2f9589ca3bfa61c42020dbd3b25e",
"manifest.json": "bdd1c3b02fe3b18f35d9a884c9234568",
"version.json": "2fe5b0c7d5b3d8d633d91faefe6d5092"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
