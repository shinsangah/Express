const { MongoClient, ServerApiVersion } = require('mongodb');
const { clearConfigCache } = require('prettier');

const uri =
  'mongodb+srv://sangah:ghdtkadl!1@cluster0.zwzcput.mongodb.net/?retryWrites=true&w=majority';
// 비밀번호 꺽쇠 사용하면 안됨
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
