// 아이템 리스트
export function getAllProducts() {
  return fetch(`http://localhost:8080/products`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getAllBestItems() {
  return fetch(`http://localhost:8080/bestitem`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getAllLookbooks() {
  return fetch(`http://localhost:8080/lookbook`,{
    method: "GET",
  }).then((response) => response.json());
}

// 아이템 상세내용
export function getProductsById(id) {
  return fetch(`http://localhost:8080/products/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}
export function getBestItemById(id) {
  return fetch(`http://localhost:8080/bestitem/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getLookbookById(id) {
  return fetch(`http://localhost:8080/lookbook/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}

// 장바구니
export function purchaseProducts(games, loginId) {
  const purchases = games.map((game) => ({
    game: game,
    loginId: loginId,
    quantity: 1, // 원하는 구매 수량을 여기에 설정
  }));
  return fetch(`http://localhost:8080/products/purchaselist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchases),
  })
    .then((response) => response.json())
    .catch(() => "ERROR");
}

// 사용자 구매목록
export function getAllPurchasedProducts(loginId) {
  return fetch(`http://localhost:8080/products/purchase/${loginId}`, {
    method: "GET",
  }).then((response) => response.json());
}

// 가입
export function signUp(user) {
  return fetch(`http://localhost:8080/api/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

// 로그인
export function login(user) {
  return fetch(`http://localhost:8080/api/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
