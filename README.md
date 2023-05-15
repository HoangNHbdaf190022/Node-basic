**GITHUB LINK**: https://github.com/HoangNHbdaf190022/Node-basic <br/>
**COURSE LINK**: https://www.youtube.com/watch?v=v4pgci2s980 <br/>
**Description**: Khóa học được phát triển `Hỏi Dân IT` với 19 videos và 17 series <br/>
**Cách viết README cơ bản**: https://ihoctot.com/cach-viet-readme-md

### Bạn cần chuẩn bị gì?
**Node**: 14.17.0 <br/>
**NVM**: NVM giúp bạn có thể chuyển đổi qua lại giữa các node version: https://github.com/nvm-sh/nvm <br/>
**Xampp**: Đây là database mà chúng ta sẽ làm việc
### Các dependency được cài đặt trong dự án
    "@babel/core": "7.15.5",
    "@babel/node": "7.15.4",
    "@babel/preset-env": "7.15.6",
    "body-parser": "^1.20.2",
    "dotenv": "10.0.0",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mysql2": "2.3.0",
    "nodemon": "^2.0.22",
    "sequelize-cli": "^6.2.0"
### Các cài đặt
EJS | nodemon | body-parser | @babel/core | @babel/node | @babel/preset-env 

    npm install --save-exact ejs@3.1.9 body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
---
| dotENV |

    npm install --save-exact dotenv@10.0.0
---
mysql2 | sequelize | sequelize CLI

    npm install --save-exact mysql2@2.3.0
    npm install --save-dev sequelize-cli@6.2.0
# Session 6 - VIEW_ENGINE
Trên file HTML chỉ viết được HTML chứ không thể dùng các logic như vòng lặp các thứ nhưng VIEW ENGINE giúp chúng ta xử lý các điều kiện logic trong file HTML.<br/>
Trong session này chúng ta sẽ làm việc việc với:<br/>
1. TEMPLATE_ENGINE: EJS
2. Body-parser để chuyển cấu trúc của data dưới dạng JSON
3. Nodemon để chạy node nhanh mượt mà hơn<br/>
4. Babel để chuyển đổi các ES cũ để tương thích với các ES hiện tại

### Các cài đặt trong session:
EJS | nodemon | body-parser | @babel/core | @babel/node | @babel/preset-env<br/>

    npm install --save-exact ejs@3.1.9 body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6

# Session 7 - STATIC FILES
Người dùng muốn từ giao diện muốn lấy file ảnh, media của chúng ta!<br/>
Chúng ta không muốn người dùng đạt được điều đó!<br/>
=> Static Files ra đời để cho phép HOẶC chặn người dùng thực hiện điều đó.

Trong session này chúng ta sẽ làm việc việc với File Môi Trường: .env

    npm install --save-exact dotenv@10.0.0
    
# Session 8 - ROUTER & MVC
Router: [request, response] từ người dùng.<br/>
MVC: (MVC Design Pattern) Model-View-Controller. Là một mẫu kiến ​​trúc, mô hình lập trình phổ biến được sử dụng để tạo cấu trúc cho nhiều trang web, ứng dụng tiên tiến.

Trong session này chúng ta sẽ tìm hiểu về Router và mô hình MVC. Chúng ta sẽ làm việc với
1. express.Router()
2. Service, View, Controller [chưa cần dùng đến Model]

### 1 - Cách hoạt động của MVC
Người dùng từ View nhập vào 1 router(**eg.**`gaixinh.com/gai-xinh-ha-noi`) hoặc 1 request(`gái xinh Hà Nội`) -> Bắn lên controller.<br/>
Controller nhập request xong sẽ gọi đến Model.<br/>
Model sẽ chọc vào database để lấy data -> Trả lại Controller.<br/>
Controller nhận được -> Response cho View.<br/>
View hiển thị cho người dùng.<br/>
View chính là màn hình người dùng.
### 2 - Router
Hiểu đơn giản Router chính là Request và Response của người dùng nhập vào từ website
facebook.com/hoangdepzai/

### 3 - Tiền tố trong Router
return app.use("/", router) -> Mặc định như này thì vào Home page chẳng hạn. Nhưng tôi muốn nó phải như này mới vào được Home page<br/>
--> return app.use("/xxx", router) -> Bây giờ user phải nhập như này mới vào Home page: http://xxx/facebook.com/hoangdepzai/<br/>
--> Tiền tố thì custom cái gì cũng được, tùy.

# Session 9 - HTTP REQUEST METHOD & SỬ DỤNG DATABASE VỚI NODE.JS
Có 4 request method: POST, GET, PUT, DELETE tương đương với CRUD  = Created, Read, Updated, Deleted.<br/>
Trong session này chúng ta sẽ dùng MySQL.<br/>
    Tại sao không dùng MongoDB-noSQL?<br/>
    -> Phi thực tế - nó sẽ lưu 1 đống data xuống mà đếch cần quan tâm gì hết<br/>
    -> nếu làm chat app thì được, còn không thì vứt.

### Có những database nào cần biết
MongoDB-noSQL | MS SQL Server | Mysql Server | ORM database | Oracle | PostgreSQL 
### ORM là gì?
Object Relational Mapping (ORM) là 1 công nghệ sử dụng mô hình hướng đối tượng<br/>
    Thường thì chúng ta viết query như này:<br/>
    select * from users --> `Raw query`<br/>
    findAllUsers --> `cách viết của ORM`. 
    
**eg.** 
Raw query:

    CREATE TABLE users {
        "ID" int NOT NULL PRIMARY KEY AUTOINCREMENT,
        "title" varchar(50),
        "update_date" NOT NULL
    }
----------------------------------------------------------------
ORM query:

    class Users();
    title = CharField
    update_date = DateField
----------------------------------------------------------------
Chúng ta sẽ sử dụng nó chỉ khi viết Model và ta cần mapping từ Modal xuống table ở db. Lói chung là xịn.<br/>
Các SQL còn lại thì hầu như query giống nhau.

Hàm connection.query sẽ nhận vào 2 tham số -> `connection.query`(sqlQuery, function(errs, results, fields))<br/>
    Trong đó sqlQuery là câu truy vấn **eg.** 'SELECT * FROM 'users''<br/>
    Tham số thứ 2 là 1 function nhận vào 3 tham số khác: error, results, và 1 đống blabla<br/>
    -> Nên thường thì ngta chỉ print ra error với results thôi

### Các cài đặt trong session:
| mysql2 |

    npm install --save-exact mysql2@2.3.0
| sequelize | sequelize CLI

    npm install --save-dev sequelize-cli@6.2.0
# Session - 10 CREATE NAVBAR - EJS LOOP DATA
### TÁC DỤNG CỦA EJS VÀ VIEW_ENGINE BẮT ĐẦU PHÁT HUY TÁC DỤNG
Như đã đề cập ở **Session 6**
Trên file HTML chỉ viết được HTML chứ không thể dùng các logic như vòng lặp các thứ nhưng VIEW ENGINE giúp chúng ta xử lý các điều kiện logic trong file HTML.<br/>
Trong session này, chúng ta sẽ làm 1 ví dụ hiển thị dữ liệu từ db lên table
Một số cách viết cú pháp logic trong file EJS như:<br/>
    <% **text** %><br/>
    <%# **comment** %><br/>
    <%= **variable** %><br/>
Mỗi 1 dòng là 1 cái này: <% %><br/>
**eg.** 

    <% for(let i=0; i < dataUser.length; i++) { %>
        <tr>
            <td><%= dataUser[i].id %></td>
            <td><%= dataUser[i].firstName %></td>
            <td><%= dataUser[i].lastName %></td>
        </tr>
    <% } %>
    <%# Bạn đã thông não chưa :D %>

# Session - 11 ROUTER PARAMS
Route parameters được đặt theo URL sẽ được phân khúc như **(1)**, giá trị được cap lại sẽ được điền vào từng param tương ứng như **(2)**, 
lúc này ở ngoài thanh URL nó sẽ hiể thị như **(3)** <br/> 
**(1)** Route path: /users/:userId/books/:bookId --> Được minh họa trong file route<br/>
**(2)** req.params: { "userId": "34", "bookId": "8989" } --> Nếu truyền tuần tự các tham số sau dấu 2 chấm thì kết quả sẽ trả ra như URL bên dưới<br/>
**(3)** Request URL: http://localhost:3000/users/34/books/8989 --> Result

Trong session này, chúng ta sẽ tìm hiểu về `router param`. Ví dụ như lúc ta click vào detail thì sẽ hiện ra thông tin của 1 người dùng, của 1 sản phẩm từ db chẳng hạn. Về session này thì khuyên bạn nên follow docs thật kĩ https://expressjs.com/en/guide/routing.html.<br/>
2. Tiếp theo là `connect mysql with promise`. MySQL2 hỗ trợ Promise thông qua sử dụng thư viện Bluebird, một thư viện Promise bổ sung cho Node.js. Các phương thức của MySQL2 trả về một Promise, cho phép sử dụng cú pháp async/await hoặc chaining với then/catch để xử lý các yêu cầu truy vấn cơ sở dữ liệu.
    // tạo kết nối trong file connectDB.js
    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_name',
    password: 'password' //maybe
    });

    // thực hiện truy vấn
    const [rows, fields] = await connection.execute('SELECT * FROM users');

    // xử lý kết quả truy vấn
    console.log(rows);
3. `Pool` trong MySQL<br/>
Pooling là một kỹ thuật cho phép **tạo ra nhiều kết nối** đến cơ sở dữ liệu để đáp ứng nhu cầu xử lý tương tác với cơ sở dữ liệu của các ứng dụng. Nó cho phép các kết nối được tạo trước đó được **tái sử dụng** khi cần thiết, thay vì tạo ra các kết nối mới cho mỗi yêu cầu từ ứng dụng.
4. Chương trình sẽ đọc `router param` ntn?<br/>
Ở file _`homeController.js`_ - hàm **getDetailPage()** đã định nghĩa và lấy id từ db ra, **userID** sẽ là đại diện cho **id** đó<br/>
Ở file _`route.js`_. Trong hàm **initWebRoutes()** lấy Route path là _'/detail/user/:userID'_ <br/>
Còn bây giờ để hiển thị detail user trên browser là việc của _`index.ejs`_ thông qua anchor _detail/user/dataUser[i].id_
# Session 12 - FORM VÀ POST REQUEST
Trong session này, chúng ta sẽ áp dụng form và method=POST vào project để add new user. Sau khi add thì dùng `res.redirect('/')` để refresh lại trang.<br/>
Một số thay đổi của project trong session này:<br/>
1. Trong file _`server.js`_, ta thêm **_Middleware_** for routes
2. Trong file _`homeController.js`_, ta thêm 1 **_distructuring_** từ **_req.body_** để thực hiện insert data vào db
3. Tất nhiên phải thêm route (_handlePost()_) trong _`route.js`_ rồi :D

# 10 vạn câu hỏi vì sao
### **Tại sao sử dụng `MySQL2`**
Đầu tiên phải biết MySQL2 là một **thư viện** kết nối MySQL cho Node.js, trong khi đó MySQL là một hệ quản trị cơ sở dữ liệu phổ biến, được sử dụng rộng rãi trên nhiều nền tảng khác nhau.<br/>
So sánh giữa MySQL2 và MySQL, chúng ta có thể thấy:<br/>
1. MySQL2 hỗ trợ các tính năng độc đáo như **query prepare**, hỗ trợ **Promise** và **stream**, trong khi MySQL không hỗ trợ các tính năng này.
2. MySQL2 có **hiệu suất tốt hơn** so với MySQL. MySQL2 sử dụng **query prepare** để giảm tải và cải thiện hiệu suất, trong khi MySQL không có tính năng này.
3. MySQL2 có cách **tiếp cận an toàn hơn về bảo mật** bằng cách hỗ trợ SSL và các phương pháp tránh tấn công SQL Injection, trong khi MySQL cũng cung cấp các tính năng tương tự, nhưng chưa được tối ưu hóa tốt như MySQL2.

### **`Sequelize` là gì**
**Sequelize** được gọi là một công cụ (**tool**) ORM (Object-Relational Mapping). **ORM** là một kỹ thuật lập trình cho phép chúng ta tương tác với cơ sở dữ liệu bằng các đối tượng (objects) thay vì viết các truy vấn SQL trực tiếp. Sequelize giúp **đơn giản hóa** việc tương tác với cơ sở dữ liệu bằng cách cung cấp một giao diện dễ sử dụng và **các tính năng** hữu ích như tạo bảng, thêm, sửa, xóa và truy vấn dữ liệu. Vì vậy, nó được coi là một công cụ hữu ích trong quá trình phát triển ứng dụng web Node.js.<br/>
ChatGPT sẽ cho bạn các **ví dụ thực tế về sequelize**
### **`Pool` là gì**
Pooling là một kỹ thuật cho phép **tạo ra nhiều kết nối** đến cơ sở dữ liệu để đáp ứng nhu cầu xử lý tương tác với cơ sở dữ liệu của các ứng dụng. Nó cho phép các kết nối được tạo trước đó được **tái sử dụng** khi cần thiết, thay vì tạo ra các kết nối mới cho mỗi yêu cầu từ ứng dụng. <br/>
Trong Node.js, mysql2 hỗ trợ Pooling thông qua hai phương thức chính: **createPool** và **pool**. createPool được sử dụng để tạo ra một pool kết nối mới, và pool được sử dụng để lấy một kết nối từ pool.<br/>
eg. **createPool**
    const mysql = require('mysql2');

    const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    });
Ở đây, ta đã tạo ra một pool kết nối với giới hạn kết nối là 10. Nếu một yêu cầu từ ứng dụng yêu cầu kết nối nhưng tất cả các kết nối trong pool đều đã được sử dụng, thì yêu cầu đó sẽ được đưa vào hàng đợi (queueLimit: 0) và đợi cho đến khi một kết nối được giải phóng.

eg. **Pool**<br/>
Sau khi tạo ra một pool kết nối, ta có thể sử dụng phương thức pool để lấy một kết nối từ pool:
    pool.getConnection((err, connection) => {
    if (err) throw err; // xử lý lỗi

    connection.query('SELECT * FROM users', (error, results, fields) => {
        connection.release(); // giải phóng kết nối
        if (error) throw error; // xử lý lỗi
        console.log(results); // xử lý kết quả truy vấn
    });
    });
Ở đây, ta sử dụng phương thức **getConnection** của pool để lấy một kết nối từ pool. Khi kết nối được sử dụng xong, ta sử dụng phương thức release để giải phóng kết nối và đưa nó trở lại trong pool để sử dụng cho các yêu cầu tiếp theo. Sau đó, ta thực hiện truy vấn thông qua kết nối này bằng phương thức query

