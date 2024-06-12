

// 这里添加JavaScript逻辑，处理语言切换
document.querySelector('.language-switch button').addEventListener('click', function() {
    var sourceLanguageSelect = document.getElementById('sourceLanguage');
    var targetLanguageSelect = document.getElementById('targetLanguage');
    var temp = sourceLanguageSelect.value;
    sourceLanguageSelect.value = targetLanguageSelect.value;
    targetLanguageSelect.value = temp;
});
//防止目标语言和源语言相同
document.getElementById('targetLanguage').addEventListener("change",function (){
    var sSelect = document.getElementById('sourceLanguage');
    var tSelect = document.getElementById('targetLanguage');
    if(tSelect.value === sSelect.value){
        if(sSelect.value !== "中文"){
            sSelect.value = "中文";
        }else{
            sSelect.value = "英语";
        }
    }
})
//防止源语言和目标语言相同
document.getElementById('sourceLanguage').addEventListener("change",function (){
    var sSelect = document.getElementById('sourceLanguage');
    var tSelect = document.getElementById('targetLanguage');
    if(tSelect.value === sSelect.value){
        if(tSelect.value !== "中文"){
            tSelect.value = "中文";
        }else{
            tSelect.value = "英语";
        }
    }
})

//切换按钮
document.addEventListener('DOMContentLoaded', (event) => {
    // 获取所有翻译选择按钮
    const buttons = document.querySelectorAll('.translate-selection button');
    buttons[0].classList.add('active');
    // 为每个按钮添加点击事件监听器
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 首先移除所有按钮的激活状态
            buttons.forEach(btn => btn.classList.remove('active'));

            // 然后给当前被点击的按钮添加激活状态
            this.classList.add('active');
        });
    });
});