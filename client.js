// CLIENT-VM (VIRTUAL MACHINE 2)
const axios = require("axios");

axios.post("http://192.168.56.101:3000/save", {
  name: "Akarsh",
  project: "Virtual Box Assignment",
  from: "Client-VM"
})
.then(res => {
  console.log(res.data);
})
.catch(err => {
  console.error(err.message);
});
