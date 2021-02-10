const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write('Name: TW7');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};


module.exports = {
  net,
  connect
};