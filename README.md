
# Session 6 - VIEW_ENGINE
Trên file HTML chỉ viết đưuọc HTML chứ không thể dùng các login như vòng lặp các thứ nhưng VIEW ENGINE giúp chúng ta xử lý các điều kiện logic trong file HTML.
Trong session này chúng ta sẽ làm việc việc với:
    TEMPLATE_ENGINE: EJS
    Body-parser để chuyển cấu trúc của data dưới dạng JSON
    Nodemon để chạy node nhanh mượt mà hơn
    babel để chuyển đổi các ES cũ để tương thích với các ES hiện tại

Các cài đặt trong session:
EJS | nodemon | body-parser | @babel/core | @babel/node | @babel/preset-env
-> npm install --save-exact ejs@3.1.9 body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6

# Session 7 - STATIC FILES
Người dùng muốn từ giao diện muốn lấy file ảnh, media của chúng ta!
Chúng ta không muốn người dùng đạt được điều đó!
=> Static Files ra đời để cho phép HOẶC chặn người dùng thực hiện điều đó.

Trong session này chúng ta sẽ làm việc việc với:
    File Môi Trường: .env
    -> npm install --save-exact dotenv@10.0.0
    
# Session 8 - ROUTER & MVC
Router: [request, response] từ người dùng.
MVC: (MVC Design Pattern) Model-View-Controller. Là một mẫu kiến ​​trúc, mô hình lập trình phổ biến được sử dụng để tạo cấu trúc cho nhiều trang web, ứng dụng tiên tiến.

Trong session này chúng ta sẽ tìm hiểu về Router và mô hình MVC. Chúng ta sẽ làm việc với
    express.Router()
    Service, View, Controller [chưa cần dùng đến Model]

### 1 - Cách hoạt động của MVC
Người dùng từ View nhập vào 1 router(eg.gaixinh.com/gai-xinh-ha-noi) hoặc 1 request(gái xinh Hà Nội) -> Bắn lên controller.
Controller nhập request xong sẽ gọi đến Model.
Model sẽ chọc vào database để lấy data -> Trả lại Controller.
Controller nhận được -> Response cho View.
View hiển thị cho người dùng.
View chính là màn hình người dùng.
### 2 - Router
Hiểu đơn giản Router chính là Request và Response của người dùng nhập vào từ website
facebook.com/hoangdepzai/

### 3 - Tiền tố trong Router
return app.use("/", router) -> Mặc định như thì vào Home page chẳng hạn. Nhưng tôi muốn nó phải như này mới vào được Home page
--> return app.use("/xxx", router) -> Bây giờ user phải nhập như này mới vào Home page: http://xxx/facebook.com/hoangdepzai/
--> Tiền tố thì custom cái gì cũng được, tùy.

# Session 9 - HTTP REQUEST METHOD & SỬ DỤNG DATABASE VỚI NODE.JS
Có 4 request method: POST, GET, PUT, DELETE tương đương với CRUD  = Created, Read, Updated, Deleted.
Trong session này chúng ta sẽ dùng MySQL. 
    Tại sao không dùng MongoDB-noSQL?
    Phi thực tế - nó sẽ lưu 1 đống data xuống mà đếch cần quan tâm gì hết
    nếu làm chat app thì được, còn không thì vứt.

### 1 - Có những database nào cần biết
MongoDB-noSQL | MS SQL Server | Mysql Server | ORM database | Oracle | PostgreSQL 
### 2 - ORM là gì?
Object Relational Mapping (ORM) là 1 công nghệ sử dụng mô hình hướng đối tượng
    Thường thì chúng ta viết query như này:
    select * from users --> Raw query
    findAllUsers --> cách viết của ORM. 
    
eg. 
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
    Chúng ta sẽ sử dụng nó chỉ khi viết Model và ta cần mapping từ Modal xuống table ở db. Lói chung là xịn
    Các SQL còn lại thì hầu như query giống nhau

Các cài đặt trong session:
mysql2 | sequelize | sequelize CLI
-> npm install --save-exact mysql2@2.3.0
-> npm install --save-dev sequelize-cli@6.2.0
-> cd src --> npx sequelize-cli init







