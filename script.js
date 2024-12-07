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
            "김가루",
            "단호박",
            "뉴슈가",
            "맛소금",
            "무",
            "미역",
            "배추",
            "양파",
            "잔치국수",
            "태경 고추장용 고추가루",
            "태경 김치용 고추가루",
            "튀김가루",
            "쇠고기 다시다",
            "멸치 다시다",
            "물엿",
            "고무장갑 (특대)",
            "뚝배기 3호",
            "락스",
            "랩 (큰사이즈)",
            "면장갑",
            "일회용 비닐장갑(한국)",
            "비닐팩 (5 LB)",
            "바닥세제",
            "퐁퐁",
        ];
    } else if (subPage === "goldenLeaf") {
        // 서브페이지 02 - 골든리프
        ingredients = [
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
            "Red Sheppards Pepper",
            "Tofu",
            "Tofu Soft",
            "Potato (yukon)",
            "Mayonaiase (Palace)",
            "Mussels",
            "Nappa",
            "Oyster Sauce",
            "Pineapple Slice (Can)",
            "Spanish Onion",
            "Red Onion",
            "Roasted Sesame Seed",
            "Salt",
            "Sugar",
            "Sesame Oil",
            "Sesame Oil (5L)",
            "Soy Sauce (Kikoman)",
            "Squid Body",
            "Squid Leg",
            "Tiger Shrimp",
            "Seafood Medley",
            "Vinegar",
            "Wasabi",
            "Water",
            "Water Chestnut Startch",
            "Watercress",
            "Rice Gozen",
            "Corn Syrup",
            "Glass Noodle",
            "Oil (16L)",
            "Italiano",
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
            "Plastic Food Wrap",
            "plastic Straw",
            "Pos Paper",
            "Chopstick",
            "Glove Large (Nitrate)",
            "Glove Medium (Nitrate)",
            "Dish Wash Glove",
            "Dish Wash Liquid",
            "Plastic Roll Bag (Large)",
            "Plastic Roll Bag (Medium)",
            "Garbage Bag Black (26 X 36)",
            "Garbage Bag Black (35 X 47)",
            "Garbage Bag Clear (35 X 50)",
            "Card Machine Paper",
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
            "유부",
            "멸치액젓",
            "모밀국수",
            "미림",
            "물엿",
            "부산 어묵 사각",
            "볶음 깨",
            "사골 곰탕 육수",
            "새우젓",
            "순생선살 종합어묵",
            "쌀(천하일미)",
            "쌀",
            "식초",
            "쇠고기 다시다",
            "멸치 다시다",
            "참기름(헤이와)",
            "참기름(가도야)",
            "혼다시",
            "환만 식초",
            "햇살 담은 진간장",
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
