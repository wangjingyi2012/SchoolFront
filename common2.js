const studentInfo = localStorage.getItem('studentInfo');
const studentInfoData = JSON.parse(studentInfo);
var studentId = null;
if (!studentInfo) {
    window.location.href = 'index.html';
} else {
    studentId = studentInfoData.id;
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.realname').textContent = studentInfoData.realname;
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function (e) {
            e.preventDefault(); // 防止链接默认的跳转行为
            localStorage.clear(); // 清除 localStorage
            window.location.href = 'index.html'; // 跳转到 index.html
        });
    }

    fetch(`${configUrl.apiUrl}/student/user-info?sid=${studentId}`)
          .then(response => response.json())
          .then(data => {
            if (data.code === '00000' && data.data) {
              // 更新头像
              const avatarUrl = data.data.avator;
              const avatar2ImageElement = document.getElementById('avatar2'); 
              const realname2 = document.getElementById('realname2'); 
              const username2 = document.getElementById('username2'); 
              realname2.textContent = data.data.realname;
              username2.textContent = data.data.username;
              avatar2ImageElement.src = avatarUrl;
            }
          })
          .catch(error => console.error('Failed to fetch user info:', error));  

});
