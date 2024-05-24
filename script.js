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
            "감자",
            "감칠맛 미원",
            "강초",
            "고운 소금",
            "고무장갑 (특대)",
            "김가루",
            "단호박",
            "뚝배기 3호",
            "락스",
            "랩 (큰사이즈)",
            "뉴슈가",
            "맛소금",
            "면장갑",
            "무",
            "미역",
            "배추",
            "비닐팩 (5 LB)",
            "바닥세제",
            "양파",
            "잔치국수",
            "태경 고추장용 고추가루",
            "태경 김치용 고추가루",
            "퐁퐁",
            "튀김가루",
        ];
    } else if (subPage === "goldenLeaf") {
        // 서브페이지 02 - 골든리프
        ingredients = [
            "Green Leaf",
            "Tofu Bucket",
            "White Mushroom",
            "Seafood Mushroom",
            "King Oyster Mushroom",
            "Cucumber",
            "Frozen Corn",
            "Sugar",
            "Nappa",
            "Baby Nappa",
            "Green Cabbage",
            "Red Cabbage",
            "Buttercup Pumpkin",
            "Peeled Garlic",
            "Red Bell Pepper",
            "Red Sheppards Pepper",
            "Potato (yukon)",
            "Spanish Onion",
            "Red Onion",
            "Rice Gozen",
            "Seafood Medley",
            "Green Onion (iceless)",
            "Mozzarella Cheese",
            "Mayonaiase (Palace)",
            "Mussels",
            "Lemon",
            "Zucchini (Fancy)",
            "Apple (Fuji)",
            "Egg White (Large)",
            "Carrot",
            "Enoki Mushroom",
            "Bean Sprout",
            "Broccoli",
            "Tofu Soft ",
            "Green Bean",
            "Bleach",
            "Watercress",
            "Jalapeño",
            "Wasabi",
            "Eggplant",
            "Soy Sauce (Kikoman)",
            "Oil (16L)",
            "Oyster Sauce",
            "Water Chestnut Startch",
            "Chive",
            "Roasted Sesame Seed",
            "Black Rice",
            "Salt",
            "Radish (Korea)",
            "Glass Noodle",
            "Ginger",
            "Asian Pear",
            "Pineapple Slice (Can)",
            "Squid Leg",
            "Squid Body",
            "Tiger Shrimp",
            "Vinegar",
            "Water",
            "Plastic Bag (3LB)",
            "Plastic Bag (5LB)",
            "To-Go Bag",
            "Nitrile Glove (M)",
            "Nitrile Glove (L)",
            "Paper Towel (Bounty Plus)",
            "Dish Wash Glove",
            "Glove Large (Nitrate)",
            "Dish Wash Liquid",
            "Oven Grill Cleaner",
            "Garbage Bag Black (35 X 47)",
            "Garbage Bag Black (26 X 36)",
            "Garbage Bag Clear (35 X 50)",
            "Plastic Food Wrap",
            "Napkin",
            "Brown Paper",
            "Toilet Paper",
            "Pos Paper",
            "Card Machine Paper",
            "Sesame Oil (5L)",
            "Sesame Oil",
            "plastic Straw",
            "Chopstick",
        ];
    } else if (subPage === "pk") {
        // 서브페이지 03 - PK
        ingredients = [
            "고추장",
            "국간장",
            "굴소스",
            "꽃소금",
            "냉면 육수",
            "다시 멸치",
            "다시마",
            "당면",
            "된장",
            "메이트 수세미",
            "멸치 다시다",
            "멸치액젓",
            "모밀국수",
            "미림",
            "물엿",
            "부산 어묵 사각",
            "볶음 깨",
            "사골 곰탕 육수",
            "새우젓",
            "순생선살 종합어묵",
            "쌀",
            "식초",
            "쇠고기 다시다",
            "은사 수세미",
            "유부",
            "참기름",
            "파전 종이",
            "피치 컬러 페이퍼",
            "혼다시",
            "환만 식초",
            "햇살 담은 진간장",
            "떡국떡",
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
            "목살",
            "오겹",
            "항정",
            "가브리",
            "부채",
            "갈매기",
            "토시",
            "대패",
            "우삼",
            "육회",
            "샤브샤브",
            "와규등심",
            "와규안심",
            "와규부채",
            "늑간",
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
