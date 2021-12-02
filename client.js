const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('howdy pardner');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write('Name: 616');
  });



  return conn;
};


module.exports = connect;
