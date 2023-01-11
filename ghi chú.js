/*
    *  MỘT VÀI ĐIỀU QUAN TRỌNG 
        - Để gọi biến nên sử dụng const hoặc let
        - console.log() để hiển thị 
        * Chế độ Strict mode là chế độ nghiêm ngặt: 'use strict'
            + Mục đích
                Tránh việc khai báo biến mà không có từ khóa (var, let, const)
                Tránh trùng tham số khi sử dụng hàm
                Chặt chẽ hơn trong phạm vi hoạt động
                Tránh đặt tên biến trùng từ khóa


    * CẤU TRÚC CỦA MẢNG ARRAY sử dụng []
        - Cách chuyển mảng thành các biến và giá trị tương ứng
            const [tên biến 1, tên biến 2, ....] =  tên mảng;
        - Cách chuyển đổi giá trị giữa các biến 
            [biến 1, biến 2] =  [biến 2, biến 1];
            + Khi muốn chuyển đổi giá trị của các biến chúng ta nên sử dụng let
        - Lấy giá trị của mảng lồng
            Khởi tạo biến và gán bằng giá trị của mảng
                * var mang_long = [2, 4, [5, 6]];
                * var [i, , j] = mang_long;
                * console.log(i, j); => Trả về giá trị 2 và [5, 6] mà không có 4
                * 
                * 
    * CẤU TRÚC CỦA ĐỐI TƯỢNG OBJECT sủ dụng {}
    
    * TOÁN TỬ SPREAD: ...tên mảng
        Cú pháp: var(let, const) tên biến = [giá trị 1, giá trị 2, ...giá trị n, ...tên mảng cần copy];
        Sử dụng để sao chép các giá trị của mảng cũ vào một mảng mới
        Để lấy từng phần tử riêng lẻ của mảng cũng có thể dùng toán tử spread với cú pháp: console.log(...tên mảng);
    * TOÁN TỬ && VÀ ||
        ||: nếu giá trị đầu tiên đúng thì các giá trị sau đó cũng không được đánh giá.
            Toán tử này không nhận được chuỗi giá trị rỗng và không xác định
        &&: Hoạt động ngược lại với toán tử ||, trả về giá trị cuối cùng được đánh giá, và sẽ trả về giá trị ảo 
    
    * TOÁN TỬ LIÊN KẾT NULLISH
        Nhận giá trị mặc định được gán vào khi khởi tạo 
        
*/  
