# Hust Quiz

Tổng hợp câu hỏi trắc nghiệm một số môn: IT4470, IT4079, IT4898, IT4422.

## Giới Thiệu

[Hust Quiz](https://thangndgit.github.io/hust-quiz) là một trang web tĩnh tổng hợp các câu hỏi trắc nghiệm, hỗ trợ ôn luyện một số môn tự chọn mã IT của Đại học Bách Khoa Hà Nội.

Tính tới kỳ 2023, Hust quiz đang lưu trữ câu hỏi của các môn học sau:

1. IT4079
2. IT4422
3. IT4470
4. IT4898

## Hướng Dẫn Sử Dụng

- Chọn môn bạn cần ôn luyện tại [đây](https://thangndgit.github.io/hust-quiz).
- Ctrl + P để thực hiện in tài liệu giấy.
- Refresh trang để shuffle câu hỏi / thứ tự đáp án.
- Ấn vào từng đáp án để xem đó là đáp án đúng (xanh) hay sai (đỏ).
- Ấn vào tiêu đề câu hỏi để hiện / ẩn đáp án đúng của riêng câu hỏi.
- Ấn vào tiêu đề lớn ở đầu trang để hiện / ẩn đáp án tất cả các câu.
- Ấn nút Save ở cạnh tiêu đề lớn đầu trang để tải file JSON các câu hỏi về
- Hiện chưa hỗ trợ câu hỏi có hình ảnh.
- Hiện chưa hỗ trợ lưu trạng thái làm bài, do vậy người sử dụng nên làm hết 1 lượt câu hỏi trước khi refresh / thoát trang

## Tạo custom quiz form

1. Chọn "Import custom quiz"
2. Upload file json chứa array các quiz. Array hợp lệ có format như sau:

```js
[
  {
    "question": "Question 1",
    "answers": [
      { "text": "Answer 1", "isCorrect": true },
      { "text": "Answer 2", "isCorrect": false },
      ...
      { "text": "Answer n", "isCorrect": false },
    ]
  },
  ...
]
```

3. Sau khi tải lên thành công có thể chọn "Your custom quiz" để sử dụng.

## Đóng Góp

Nếu bạn muốn đóng góp thêm câu hỏi, vui lòng tạo pull request.

- Tạo file json mới trong thư mục data.
- Chạy `node initData.js` để generate file HTML tương ứng với json vừa tạo.
