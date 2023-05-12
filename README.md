**GITHUB LINK**: https://github.com/HoangNHbdaf190022/Node-basic <br/>
**COURSE LINK**: https://www.youtube.com/watch?v=v4pgci2s980 <br/>
**Description**: Khóa học được phát triển `Hỏi Dân IT` với 19 videos và 17 series <br/>
**Cách viết README cơ bản**: https://ihoctot.com/cach-viet-readme-md
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
### Cách cài đặt
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
Trên file HTML chỉ viết được HTML chứ không thể dùng các login như vòng lặp các thứ nhưng VIEW ENGINE giúp chúng ta xử lý các điều kiện logic trong file HTML.<br/>
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
Trên file HTML chỉ viết được HTML chứ không thể dùng các login như vòng lặp các thứ nhưng VIEW ENGINE giúp chúng ta xử lý các điều kiện logic trong file HTML.<br/>
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
