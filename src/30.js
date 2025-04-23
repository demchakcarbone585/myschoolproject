// 生成随机数
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 获取当前时间戳
function getTimestamp() {
    const now = new Date();
    return Number(Date.now().toString());
}

// 根据时区设置日期和时间
function setTimeZone(timezone) {
    const date = new Date(Date.parse('2023-10-01T00:00:00Z') + timezone);
    if (date.getHours() >= 0 && date.getHours() <= 19) {
        return 'Asia/Shanghai';
    } else {
        return 'Europe/Madrid';
    }
}

// 获取时间格式化字符串
function formatTime(time) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    if (hour >= 0 && hour <= 19) {
        return `${hour}时${minute}分${second}`;
    } else {
        return `${hour + 24}${minute}分${second}`;
    }
}

// 检查数字是否在给定范围内
function checkInRange(number, min, max) {
    if (min <= number && number <= max) {
        return true;
    } else {
        return false;
    }
}
