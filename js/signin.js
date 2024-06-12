
document.getElementById('signinform').onsubmit = function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var btn = document.getElementById('submit-btn').innerHTML = "登录中...";
    //var sbloading = document.getElementById('submit-loading');
    // todo删除submit-loading中的visually-hidden
    // sbloading.classList.remove('visually-hidden');

    // 使用Fetch API发送POST请求
    fetch('http://localhost:8080/user/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)
    })
        .then(response => response.json()) // 解析JSON格式的响应
        .then(data => {
            // 使用弹窗显示响应内容
            alert('Email: ' + data.email + '\nPassword: ' + data.password);
            btn = document.getElementById('submit-btn').innerHTML = "登录";
            // sbloading.element.add('visually-hidden');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};