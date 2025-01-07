// 스크립트
document.addEventListener("DOMContentLoaded", () => {
    const subPage = document.querySelector("body").id; // 서브페이지에서 ID값 가져오기
    const ingredientsContainer = document.getElementById("ingredients-container");
    const copyButton = document.getElementById("copy-button");
    const copiedDataTextarea = document.getElementById("copied-data");

    let ingredients = [];

    // Set the ingredients based on the current subpage
    if (subPage === "international") {
        // 서브페이지 01 - 인터네셔널
        ingredients = [
            "상추",
            "파(Green Onion)",
            "깐마늘",
            "쥬치니(Zucchini)",
            "부추",
            "그린빈",
            "홍피망",
            "할라피뇨",
            "양송이버섯",
            "새송이버섯",
            "씨푸드버섯",
            "시메지버섯",
            "미나리(파운드)",
            "양배추(1박스)",
            "양배추(낱게)",
            "적양배추(1박스)",
            "적약배추(낱게)",
            "모짜렐라 치즈",
            "프로즌콘",
            "가시오이",
            "레몬(박스)",
            "당근",
            "무",
            "생강",
            "감자",
            "배추",
            "양파",
            "적양파",
            "블랙타이거 새우",
            "해물믹스",
            "종합어묵",
            "맛술(미림)",
            "물엿",
            "식용유",
            "멸치액젓",
            "샘표 진간장",
            "다시멸치",
            "쇠고기 다시다",
            "멸치 다시다",
            "건다시마",
            "미역",
            "단호박",
            "김가루",
            "쌀",
            "동치미육수",
            "뉴슈가",
            "새우젓",
            "맛소금",
            "중국 참기름",
            "--------------------------------------",
            "고운 소금",
            "태경 고추장용 고추가루",
            "태경 김치용 고추가루",
            "식용카라멜",
            "고무장갑 (특대)",
            "락스",
            "랩 (큰사이즈)",
            "면장갑(두꺼운)",
            "일회용 비닐장갑(한국)",
            "비닐팩 (5 LB)",
            "롤백(미디움)",
            "롤백(라지)",
            "뚝배기 3호",
            "뚝배기 3호 받침대",
            "뚝배기 4호",
            "뚝배기 4호 받침대",
            "퐁퐁",
            "바닥세제",
        ];
    } else if (subPage === "goldenLeaf") {
        // 서브페이지 02 - 골든리프
        ingredients = [
            "Tofu",
            "Pineapple Slice (Can)",
            "Red Sheppards Pepper",
            "Sugar",
            "Shirakiku Sesame Oil",
            "Squid Body",
            "Squid Leg",
            "Water Chestnut Startch",
            "Salt",
            "Sukina Buckwheat Noodle",
            "Shirakiku Roasted Sesame",
            "Black Pepper Powder",
            "Italiano",
            "Mayonaiase (Palace)",
            "Oyster Sauce",
            "Vinegar",
            "Garbage Bag Black (26 X 36)",
            "Garbage Bag Black (35 X 47)",
            "Garbage Bag Clear (35 X 50)",
            "Plastic Food Wrap",
            "--------------------------------------",
            "Apple (Fuji)",
            "Asian Pear",
            "Baby Nappa",
            "Bean Sprout",
            "Black Rice",
            "Broccoli",
            "Buttercup Pumpkin",
            "Carrot",
            "Chive",
            "Cucumber",
            "Egg White (Large)",
            "Eggplant",
            "Enoki Mushroom",
            "Frozen Corn(Below Zero)",
            "Zucchini (Fancy)",
            "Garlic (Peeled)",
            "Ginger",
            "Soybean Sprout",
            "Green Bean",
            "Green Cabbage(each)",
            "Red Cabbage(each)",
            "Green Cabbage(box)",
            "Red Cabbage(box)",
            "Green Leaf",
            "Green Onion (iceless)",
            "Jalapeño",
            "King Oyster Mushroom",
            "Seafood Mushroom",
            "White Mushroom",
            "Lemon",
            "Radish (Korea)",
            "Red Bell Pepper",
            "Mozzarella Cheese(Garniture not a Castle)",
            "Castle Cheese",
            "Potato (yukon)",
            "Mussels",
            "Nappa",
            "Spanish Onion",
            "Red Onion",
            "Roasted Sesame Seed",
            "Tiger Shrimp",
            "Sesame Oil (5L)",
            "Seafood Medley",
            "Soy Sauce (Kikoman)",
            "Wasabi",
            "Water",
            "Watercress",
            "Rice Gozen",
            "Corn Syrup",
            "Glass Noodle",
            "Oil (16L)",
            "Oven Grill Cleaner",
            "Bleach",
            "Napkin",
            "Nitrile Glove (L)",
            "Nitrile Glove (M)",
            "Paper Towel (Bounty Plus)",
            "To-Go Bag",
            "Toilet Paper",
            "Brown Paper",
            "Plastic Bag (3LB)",
            "Plastic Bag (5LB)",
            "plastic Straw",
            "Pos Paper",
            "Chopstick",
            "Glove Large (Nitrate)",
            "Glove Medium (Nitrate)",
            "Dish Wash Glove",
            "Dish Wash Liquid",
            "Card Machine Paper",
            "Plastic Roll Bag (Large)",
            "Plastic Roll Bag (Medium)",
        ];
    } else if (subPage === "pk") {
        // 서브페이지 03 - PK
        ingredients = [
            "고추가루 김치용(태경X)",
            "고추가루 고추장용(태경X)",
            "해찬들 된장",
            "해찬들 고추장",
            "냉면 육수",
            "햇살 담은 진간장",
            "혼다시",
            "튀김가루",
            "꽃소금",
            "환만 식초",
            "강초",
            "부산 어묵 사각",
            "종합어묵",
            "잔치국수",
            "미원",
            "국간장",
            "굴소스",
            "흑미",
            "당면",
            "사골 곰탕 육수",
            "레몬주스",
            "면장갑",
            "--------------------------------------",
            "다시 멸치",
            "다시마",
            "당면",
            "유부",
            "멸치액젓",
            "모밀국수",
            "미림",
            "볶음 깨",
            "순생선살 종합어묵",
            "쌀",
            "물엿",
            "식초",
            "새우젓",
            "참기름(헤이와)",
            "참기름(가도야)",
            "찹쌀가루",
            "보리차(30*24)",
            "보리차(15*30)",
            "김",
            "떡국떡",
            "참치캔 150g x 48",
            "참치캔 250g x 36",
            "사리면",
            "짜파게티",
            "중화생면",
            "파전 종이",
            "피치 컬러 페이퍼",
            "메이트 수세미",
            "은사 수세미",
            "면장갑(얇은)",
        ];
    } else if (subPage === "peace") {
        // 서브페이지 04 - 평화
        ingredients = [
           "두부",
           "순두부",
           "콩나물",
        ];
    } else if (subPage === "eggmaster") {
        // 서브페이지 05 - 에그 마스터
        ingredients = [
            "Liquid Egg",
            "Boiled Egg",
            "Large Egg",
        ];
    } else if (subPage === "metopia") {
        // 서브페이지 06 - 미토피아
        ingredients = [
            "갈비",
            "삼겹S",
            "삼겹M",
            "삼겹C",
            "안심",
            "등심",
            "살치",
            "목살",
            "오겹",
            "항정",
            "가브리",
            "부채",
            "갈매기",
            "토시",
            "대패",
            "우삼",
            "양념목살",
            "닭다리살",
            "육회",
            "샤브샤브",
            "와규등심",
            "와규안심",
            "와규부채",
            "돼지 껍데기",
            "미트패드",
        ];
    }

    // 수량 입력 필드를 자동으로 생성 (4개의 컬럼)
    for (let i = 0; i < ingredients.length; i += 2) {
        const ingredientItem = document.createElement("div");
        ingredientItem.className = "ingredient-item";
        ingredientItem.innerHTML = `
            <span>${ingredients[i]}</span>
            <input type="text" min="" value="" data-ingredient="${ingredients[i]}"> <br/>
            <span>${ingredients[i + 1]}</span>
            <input type="text" min="" value="" data-ingredient="${ingredients[i + 1]}">
        `;
        ingredientsContainer.appendChild(ingredientItem);
    }

    // 복사 버튼 클릭 시 텍스트 에어리어의 내용을 복사
    copyButton.addEventListener("click", () => {
        let copiedData = "";
        ingredients.forEach((ingredient) => {
            const inputElement = document.querySelector(`input[data-ingredient="${ingredient}"]`);
            const quantity = inputElement.value.trim();
            if (quantity !== "0" && quantity !== "") {
                copiedData += `${ingredient}: ${quantity}\n`;
            }
        });
        copiedDataTextarea.value = copiedData;
        copiedDataTextarea.select();
        document.execCommand("copy");
        alert("데이터가 복사되었습니다.");
    });
});

// 뒤로가기 버튼 클릭 시 이전 페이지로 이동
document.getElementById("back-button").addEventListener("click", () => {
    window.history.back();
});

// 모바일 화면에서 화면 크기에 따라 메뉴 버튼 스타일 조정
window.addEventListener("resize", () => {
    adjustMenuButtons();
});

// 페이지 로드시 메뉴 버튼 스타일 조정
window.addEventListener("load", () => {
    adjustMenuButtons();
});

function adjustMenuButtons() {
    const menuButtons = document.querySelectorAll(".menu-button");
    menuButtons.forEach((button) => {
        if (window.innerWidth <= 768) {
            button.style.width = "90%";
            button.style.margin = "0 auto";
        } else {
            button.style.width = "100%";
            button.style.margin = "0";
        }
    });
}
