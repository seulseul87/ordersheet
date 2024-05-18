// 스크립트
document.addEventListener("DOMContentLoaded", () => {
    const subPage = document.querySelector("body").id; // 서브페이지에서 ID값 가져오기
    const ingredientsContainer = document.getElementById("ingredients-container");
    const copyButton = document.getElementById("copy-button");
    const copiedDataTextarea = document.getElementById("copied-data");

    let ingredients = [];

    // Set the ingredients based on the current subpage
    if (subPage === "international") {
        // 서브페이지 01
        ingredients = [
            "설탕",
            "강초",
            "다시다",
            "미역",
            "자른 김",
            "물엿",
            "태경 굵은 고춧가루",
            "태경 가는 고춧가루",
            "튀김가루",
            "식초",
            "다시마",
            "육수용 멸치",
            "찬치국수면",
            "미림 맛술",
            "양파",
            "브라운 페이퍼 (Brown Paper)",
            "런천 냅킨 (Napkins)",
            "화장실 휴지(Washroom Paper)",
            "젓가락 (Chopstics)",
            "포장박스 (중) To-Go Box (M)",
            "포장박스 (소) To-Go Box (S)",
            "국물용 포장박스 To-Go Soup Box",
            "Market Peach / Steak Paper",
            "일반그릇 세제 (Dish Detergent)",
            "그릴용 세제 (Oven and Grill Detergent)",
            "POS용 용지",
            "마미손 장갑 (중)",
            "마미손 장갑 (대)",
            "목장갑",
            "크리넥스 위생장갑",
        ];
    } else if (subPage === "goldenLeaf") {
        // 서브페이지 02
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
            "Jalapeño (Half)",
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
            "Garbage Bag (35 X 47)",
            "Garbage Bag (26 X 36)",
            "Plastic Food Wrap",
            "Napkin",
            "Brown Paper",
            "Toilet Paper",
            "Pos Paper",
            "Card Machine Paper",
            "Sesame Oil",
            "Straw",
            "Chopstick",
        ];
    } else if (subPage === "pk") {
        // 서브페이지 03
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
