# Hướng dẫn triển khai để toàn bộ nhân viên dùng chung dữ liệu

### Cách nhanh nhất
1. Đưa toàn bộ thư mục app lên một hosting HTTPS (ví dụ GitHub Pages, Netlify, Vercel hoặc hosting nội bộ).
2. Gửi một đường dẫn duy nhất cho nhân viên.
3. iPhone: mở bằng Safari → Share → Add to Home Screen. Android: Chrome → Install app/Add to Home screen.

### Quan trọng
Bản 1.0 hiện lưu dữ liệu cục bộ trên từng máy. Đây là lựa chọn an toàn để thử nghiệm quy trình. Để có **một dữ liệu trung tâm cho toàn bộ nhân viên**, cần bật API Google Sheets bằng file `backend_google_apps_script/Code.gs` và dùng bản 1.1 có đồng bộ.

### Excel
Nhân viên có thể xuất `.xls` từ mục Tổng quan. File mở trực tiếp bằng Microsoft Excel.
