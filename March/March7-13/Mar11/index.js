
var keyf = "&api_key=J3NNbs9f8w7o6T586y7fqGHjCrEaPcFE";
const convert_to_json = function (response) {
  console.log(response)
  return response.json();
}


const handle_data = function (res) {
  console.log(res)
  // const user_arr = res.data[0];
  const user_arr = res.data;
  console.log(user_arr)
  // const user_arr = res.data;
  //     console.log(user_arr[0].url);
  const container = document.getElementById('list_container');

  container.innerHTML="";

  for (let i = 0; i < 10; i += 1) {
    const single_user = user_arr[i].images.original.url;
    const new_li_elem = document.createElement('img');
    new_li_elem.style.width = "200px";
    new_li_elem.style.height = "200px"
    new_li_elem.src = single_user;
    // new_li_elem.src = single_user;
    container.appendChild(new_li_elem);

  }


}



const search_fn = function () {
  //This will fetch and search.
  const input = document.getElementById('input_field');
  const user_id = input.value;
  fetch(`https://api.giphy.com/v1/gifs/search?${keyf}&q=${user_id}`)
    .then(convert_to_json)
    .then(handle_data);
}

const btn = document.getElementById('search_btn');
btn.addEventListener('click', search_fn);


fetch(`https://api.giphy.com/v1/gifs/trending?${keyf}`).then(convert_to_json)
  .then(handle_data)
