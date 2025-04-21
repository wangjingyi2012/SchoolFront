/**
 * Account Settings - Account
 */

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const deactivateAcc = document.querySelector('#formAccountDeactivation');

    // Update/reset user image of account page
    let accountUserImage = document.getElementById('uploadedAvatar');
    const fileInput = document.querySelector('.account-file-input');
      // resetFileInput = document.querySelector('.account-image-reset');

    if (accountUserImage) {
      // const resetImage = accountUserImage.src;
      fileInput.onchange = () => {
        if (fileInput.files[0]) {
          accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);
        }
      };
    }
  })();
});

document.addEventListener('DOMContentLoaded', function () {
  // 获取 HTML 元素
  const fileInput = document.getElementById('upload');
  const accountUserImage = document.getElementById('uploadedAvatar');
  const studentInfo = JSON.parse(localStorage.getItem('studentInfo'));
  const studentId = studentInfo ? studentInfo.id : null;

  // 检查文件输入是否存在
  if (fileInput) {
    fileInput.addEventListener('change', function (event) {
      const file = event.target.files[0];

      if (file) {
        // 显示选择的图片
        accountUserImage.src = window.URL.createObjectURL(file);

        // 创建 FormData 对象来发送文件
        let formData = new FormData();
        formData.append('avatar', file);
        formData.append('sid', studentId); // 您可能需要传递用户的ID或其他身份信息

        // 发送 POST 请求到服务器
        fetch(`http://www.hz-study-system.com:81/api/student/upload-avatar`, {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.code === '00000') {
            alert('头像更新成功，在匿名发贴时不会显示');
          } else {
            alert('头像更新失败');
          }
        })
        .catch(error => console.error('上传失败:', error));
      }
    });
  }
});

