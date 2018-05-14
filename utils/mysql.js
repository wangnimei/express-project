const mysql = require('mysql')

class Mysql {
  constructor () {
    this.options = {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'Wow/010013/',
      database : 'test'
    }
  }

  connection () {
    return mysql.createConnection(this.options)
  }

  query (res, sql, value) {
    const connection = this.connection()
    return new Promise((resolve, reject) => {
      connection.connect()
      connection.query(sql, value || [], (err, rows, fields) => {
        if (err) {
          // 操作数据库错误
          res.send({
            status: 4000,
            success: false,
            msg: err
          })
        } else {
          resolve(rows)
        }
      })
      connection.end()
    })
  }
}

module.exports = new Mysql()