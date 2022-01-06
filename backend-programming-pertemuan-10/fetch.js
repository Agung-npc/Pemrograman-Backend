const container = document.querySelector(".result");
  
 const getUser = async () => {
    const hasil = await fetch("https://jsonplacecholder.typicode.com/users");
    const users = await hasil.json();
  
    users.foreach((user) => (container.innerHTML += `<p>${user.name}</p>`));
  };
  
  getUser();