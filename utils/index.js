export const register = (data) =>
  (window.location.href = "/api/register" + data);

export const query = (data) =>
  `?${data.map((item) => item.name && `${item.name}=${item.value}`).join("&")}`;
