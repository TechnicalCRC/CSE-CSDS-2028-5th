let http = require("http");
let fs = require("fs");
let bLogic = require("./businessLogic");

let server = http.createServer(async (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head> <title> My Users App </title></head>");
    res.write("<body>");
    res.write('<a href="/"> User Insert Record </a> || ');
    res.write('<a href="/show-record"> User Show Record </a>');
    res.write("<hr>");
    res.write("<h1>My Users App</h1>");
    res.write("<h1>Insert User's Data:</h1>");
    res.write("<hr>");
    res.write("<form action='/submit-users' method='POST'>");
    res.write('User Name: <input type="text" name="userName"> <br><br>');
    res.write('Email Id: <input type="email" name="email"> <br><br>');
    res.write('Password: <input type="password" name="password"> <br><br>');
    res.write('Gender: <input type="radio" name="gender" value="Male"> Male ');
    res.write(' <input type="radio" name="gender" value="Female"> Female ');
    res.write(
      ' <input type="radio" name="gender" value="Other"> Other <br><br>',
    );
    res.write("<button>Save Record </button> <br><br>");

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-users" && req.method === "POST") {
    let bodyPart = [];
    req.on("data", (chunk) => {
      //console.log(chunk);
      bodyPart.push(chunk);
    });

    req.on("end", () => {
      // console.log(bodyPart);
      let fullBody = Buffer.concat(bodyPart).toString();
      //    console.log(fullBody);
      let rowData = new URLSearchParams(fullBody);
      // console.log(rowData);

      let objData = {};
      for (let [k, v] of rowData.entries()) objData[k] = v;

      console.log(objData);

      bLogic.InsertOne(objData);

      //    let jsonData = JSON.stringify(objData);
      //    console.log(jsonData);
      //     fs.writeFileSync("resFile.txt", jsonData);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else if (req.url === "/show-record") {
    res.write("<html>");
    res.write("<head> <title> My Users App </title></head>");
    res.write("<body>");
    res.write('<a href="/"> User Insert Record </a> || ');
    res.write('<a href="/show-record"> User Show Record </a>');
    res.write("<hr>");
    res.write("<h1>My Users App</h1>");
    res.write("<h1>Show User's Data:</h1>");
    res.write("<hr><hr>");

    let resultArray = await bLogic.Find();

    // res.write("<h1> User Data will be shown here...</h1>");

    res.write("<table border='1' width='80%'>");

    res.write(`<tr> 
                <th> User _id</th> 
                <th> User Name</th> 
                <th> User Password</th> 
                <th> User Email</th> 
                <th> User Gender</th> 
              </tr>`);
    let c = 0;
    resultArray.forEach((user) => {
      res.write(`<tr>
                  <td style='text-align:center'> ${++c} </td>
                  <td> ${user.userName} </td>
                  <td> ${user.password} </td>
                  <td> ${user.email} </td>
                  <td> ${user.gender} </td>
                </tr>`);
    });
    res.write("</table>");
    // res.write(resultArray[0].userName);

    res.write("<hr><hr>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});
let port = process.env.port || 3200;

server.listen(port, () => {
  console.log(`Your server started at http://localhost:${port}`);
});
