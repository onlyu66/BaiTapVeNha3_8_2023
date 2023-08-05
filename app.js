// Bài tập 1:
// Tạo một HTML gồm một nút. Sử dụng JavaScript để thay đổi màu nền của trang web 
// khi người dùng nhấn vào nút.\\
function getRandomColorRBG(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}
function changeBgColor(){
        document.body.style.backgroundColor = getRandomColorRBG();
    }

// Bài tập 2:
// Tạo một HTML với một đoạn văn bản và một nút. Sử dụng JavaScript
// để thay đổi nội dung của đoạn văn bản thành "Chào bạn!" khi người dùng nhấn nút.
let isChange=false;
let currentText=text1.textContent;
function changeParagraph(){ 
  if(isChange){
    text1.textContent = currentText;
  }else{
    text1.textContent = "Chào bạn!";
  }
  isChange=!isChange;
}

// Bài tập 3:
// Tạo một HTML với một đoạn văn bản và hai nút "Phóng to" và "Thu nhỏ". 
// Sử dụng JavaScript để thay đổi kích thước của đoạn văn bản khi người dùng nhấn vào các nút này.
function zoomInF() {
  const currentSize = parseInt(getComputedStyle(text2).fontSize);
  text2.style.fontSize = (currentSize + 2) + 'px';
}
function zoomOutF() {
  const currentSize = parseInt(getComputedStyle(text2).fontSize);
  text2.style.fontSize = (currentSize - 2) + 'px';
}

// Bài tập 4:
// Tạo một HTML với một danh sách các mục. Sử dụng JavaScript để thêm một lớp CSS
// cho mỗi mục trong danh sách khi người dùng di chuột qua mục đó.
const itemList = document.getElementById('itemList');
const listItems = itemList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseover', function() {
    this.classList.add('highlight');
  });

  listItems[i].addEventListener('mouseout', function() {
    this.classList.remove('highlight');
  });
}

// Bài tập 5:
// Tạo một HTML với một ô input và một nút. Sử dụng JavaScript để hiển thị thông báo
// "Bạn đã nhập: [giá trị nhập vào]" khi người dùng nhập dữ liệu và nhấn nút.
function changeInput() {
  const inputValue = inputField.value;
  outputText.textContent = `Bạn đã nhập: ${inputValue}`;
};