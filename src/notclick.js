/**
 * Created by bao on 2020/6/11
 */
window.onload = function () {
    alert(1)
    document.getElementById('de-reportinfo-b').innerHTML = "查查查";
    var body = document.getElementsByTagName("body");
    var bt = document.createElement("span");           //createElement生成button对象
    bt.innerHTML = '下载';
    bt.id = 'llsss';
    bt.style = {width: "100px", height: "120px"};
    var style = document.createElement("style");

    style.type = "text/css";
    style.appendChild(document.createTextNode("#llsss{z-index:1;position: absolute;\n" +
        "  left: 30px;\n" +
        "  top: 20px;}"));
    var head = document.getElementsByTagName("head")[0];

    head.appendChild(style);
    bt.onclick = function () {                          //绑定点击事件
        alert(112);
        imgsrc = document.getElementById("s_lg_img").src;
        name = 'text';
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function () {
            let canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
            let a = document.createElement("a"); // 生成一个a元素
            let event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || "photo"; // 设置图片名称
            a.href = url; // 将生成的URL设置为a.href属性
            a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = imgsrc
    };
    body.appendChild(bt);
    document.getElementById('llsss').addEventListener("click", function () {
        imgsrc = document.getElementById("s_lg_img").src;
        name = 'text';
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function () {
            let canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
            let a = document.createElement("a"); // 生成一个a元素
            let event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || "photo"; // 设置图片名称
            a.href = url; // 将生成的URL设置为a.href属性
            a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = imgsrc;
    });
};
