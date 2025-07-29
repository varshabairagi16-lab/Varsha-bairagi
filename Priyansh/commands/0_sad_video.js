/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hasivideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ariyan",
  description: "SAD VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["─━◉❖RAJ THAKUR ≛RAJ XD❖◉━─"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/OHTcAGv.mp4",
        "https://i.imgur.com/QCsxN6h.mp4",
        "https://i.imgur.com/CM6uGry.mp4",
        "https://i.imgur.com/RDji9aR.mp4",
        "https://i.imgur.com/7CaCDQX.mp4",
        "https://i.imgur.com/iusgHyQ.mp4",
        "https://i.imgur.com/isBR9V8.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
