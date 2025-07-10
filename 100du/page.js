// page.js

// Tab切换
function initTabSwitch() {
    const btnArr = document.querySelectorAll('.tablist');
    const listArr = document.querySelectorAll('.miniBox');
    btnArr.forEach((item, index) => {
        item.addEventListener('click', function() {
            document.querySelector('.btnActive')?.classList.remove('btnActive');
            item.classList.add('btnActive');
            listArr.forEach((childItem, ii) => {
                childItem.classList.toggle('activeDiv', index === ii);
            });
        });
    });
}

// 搜索栏快捷填充
function initLeafInput() {
    const tabList = document.querySelectorAll('.leaf');
    const input = document.querySelector('.inputName');
    const values = [
        '隆江猪脚饭',
        '金陵科技学院',
        '美团膨胀卷',
        '不知道该说什么',
        '小猪佩奇'
    ];
    tabList.forEach((item, index) => {
        item.addEventListener('click', function() {
            if (input) input.value = values[index] || '';
        });
    });
    input?.addEventListener('click', function() {
        this.value = '';
    });
}

// 日历悬停效果
function initCalendarHoverEffect() {
    const calendarTds = document.querySelectorAll('.tablebox1 tbody td');
    if (!calendarTds.length) return;

    // 1. 创建一个全局的 popup 元素
    const popup = document.createElement('div');
    popup.className = 'calendar-popup';
    document.body.appendChild(popup);

    calendarTds.forEach(td => {
        // 忽略没有数字的td
        if (!td.textContent.trim() || isNaN(td.textContent.trim())) return;

        td.addEventListener('mouseenter', (event) => {
            // 2. 更新内容和位置
            const day = td.textContent.trim();
            popup.textContent = `这是 ${day} 号的活动内容`; // 示例内容
            
            // 定位：在鼠标指针旁边
            popup.style.left = `${event.pageX + 15}px`;
            popup.style.top = `${event.pageY}px`;

            // 3. 显示 popup
            popup.style.display = 'block';
        });

        td.addEventListener('mouseleave', () => {
            // 4. 隐藏 popup
            popup.style.display = 'none';
        });
        
        // 当鼠标在td上移动时，也更新popup的位置
        td.addEventListener('mousemove', (event) => {
            if (popup.style.display === 'block') {
                popup.style.left = `${event.pageX + 15}px`;
                popup.style.top = `${event.pageY}px`;
            }
        });
    });
}

// 初始化
function init() {
    initTabSwitch();
    initLeafInput();
    initCalendarHoverEffect();
}

document.addEventListener('DOMContentLoaded', init);
